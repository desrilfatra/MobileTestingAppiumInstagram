class MessagePage {
    get messageIcon() {
      return $("id:action_bar_inbox_button");
    }
  
    get textAccountUser() {
      return $('xpath://android.widget.TextView[@content-desc="Muhamad Hashbi A"]');
    }
  
    get textMessageInput() {
      return $("id:row_thread_composer_edittext");
    }
  
    get btnSend() {
      return $("id:row_thread_composer_button_send");
    }
  
    async clickMessageIcon() {
      await this.messageIcon.click();
    }
  
    async clickTextAccountUser() {
      await this.textAccountUser.click();
    }
  
    async inputMessage(value) {
      await this.textMessageInput.click();
      await this.textMessageInput.setValue(value);
    }
  
    async clickTextSend() {
      await this.btnSend.click();
    }
  }
  
  module.exports = new MessagePage();