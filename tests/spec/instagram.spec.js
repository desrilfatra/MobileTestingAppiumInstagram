const {delay} = require("../../helpers/delayHelper")
const followAccountPage = require("../pageObjects/followAccountPage")

describe("test fitur follow", () => {
    it("success follow account", async () => {
      await delay(5000);
      await followAccountPage.clickTabSearch();
      await followAccountPage.inputSearch("sanbercode");
      await followAccountPage.clickUsernameAccount();
      await followAccountPage.clickButtonFollow();
  
      const follow = await $("id:profile_header_follow_button");
      await expect(follow).toHaveText("Mengikuti");
  
      await followAccountPage.clickTabHome();
    });
});