const {delay} = require("../../helpers/delayHelper")
const followAccountPage = require("../pageObjects/followAccountPage")
const messagePage = require("../pageObjects/messagePage")

describe("Test feature follow & send Message Instagram", () => {
    it("success follow account", async () => {
      await delay(6000);
      await followAccountPage.clickTabSearch();
      await followAccountPage.inputSearch("sanbercode");
      await followAccountPage.clickUsernameAccount();
      await followAccountPage.clickButtonFollow();
  
      const follow = await $("id:profile_header_follow_button");
      await expect(follow).toHaveText("Mengikuti");
  
      await followAccountPage.clickTabHome();
    });

    it("success send message", async () => {
      await delay(6000);
      await messagePage.clickMessageIcon();
      await messagePage.clickTextAccountUser();
      await messagePage.inputMessage("halo");
      await messagePage.clickTextSend();
  
      const message = await $("id:thread_title");
      await expect(message).toHaveText("Muhamad Hashbi A");
    });
});