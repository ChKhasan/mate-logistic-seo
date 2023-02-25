<template lang="html">
  <div>
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showEdition="true"
      :showDeletion="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="true"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: {
        open: {
          img: require("../assets/svg/comm-16_chat.svg"),

          name: "default",
        },
        close: {
          img: require("../assets/svg/comm-16_chat.svg"),

          name: "default",
        },
        file: {
          img: require("../assets/svg/x.svg"),

          name: "default",
        },
        closeSvg: {
          img: require("../assets/svg/x.svg"),
          name: "default",
        },
      },
      participants: [
        {
          id: "user1",
          name: "Nargiza Ahmedova",
          imageUrl:
            "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4",
        },
        // {
        //   id: "user2",
        //   name: "Support",
        //   imageUrl:
        //     "https://avatars3.githubusercontent.com/u/37018832?s=200&v=4",
        // },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl:
        "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [
        { type: "text", author: `me`, data: { text: `Say yes!` } },
        { type: "text", author: `user1`, data: { text: `No.` } },
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#4e8cff",
          text: "#ffffff",
        },
        launcher: {
          bg: "#4e8cff",
        },
        messageList: {
          bg: "#ffffff",
        },
        sentMessage: {
          bg: "#4e8cff",
          text: "#ffffff",
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222",
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867",
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: "support",
          type: "text",
          data: { text },
        });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
    },
    editMessage(message) {
      const m = this.messageList.find((m) => m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    },
  },
};
</script>
<style lang="scss">
.sc-chat-window,
.sc-launcher {
  z-index: 2040;
}
.sc-chat-window {
  border-radius: 24px !important;
  max-height: 562px !important;
  width: 340px !important;
}

.sc-launcher {
  background: #ffffff !important;
  box-shadow: 0px 4px 35px rgba(0, 138, 255, 0.25) !important;
}
.sc-message--content.sent .sc-message--text {
  background: linear-gradient(90deg, #008aff 0%, #005ba8 100%);
  border-radius: 24px 16px 4px 24px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 18px */

  color: #ffffff;
  //   transform: matrix(-1, 0, 0, 1, 0, 0);
}
.sc-message {
  width: 100% !important;
}
.sc-message--content.received .sc-message--text {
  background: #ffffff !important;
  border-radius: 16px 24px 24px 4px;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* or 18px */

  color: #024e90;
}
.sc-message-list {
  background: #f7f7f7 !important;
  border-radius: 12px !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    scroll-padding: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(160, 160, 160,0.5) !important;
    opacity: 0;
    border-radius: 5px;
    border: 3px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }
}
.sc-chat-window {
  padding-left: 16px;
  padding-right: 16px;
}
.sc-header {
  background: #fff !important;
  padding: 0 !important;
  box-shadow: none !important;
}
.sc-header--title.enabled {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: 15px !important;
  line-height: 19px;

  color: #024e90;
}
.sc-user-input {
  background: #fff !important;
  box-shadow: none !important;
}
.sc-user-input--button {
  &:nth-child(1) {
    display: none !important;
  }
  &:nth-child(2) {
    display: none !important;
  }
  &:nth-child(3) {
    display: none !important;
  }
  .sc-user-input--button-icon-wrapper {
    background: linear-gradient(90deg, #008aff 0%, #005ba8 100%) !important;
    border-radius: 50% !important;
    width: 32px;
    height: 32px;
    display: flex !important;
    align-items: center;
    justify-content: center;
    svg {
      color: #fff !important;
    }
  }
}
.sc-user-input--text {
  //   padding-left: 0 !important;
  margin-top: 16px !important;
  margin-bottom: 24px !important;
  padding-right: 60px !important;
  background: #f7f7f7 !important;
  border-radius: 12px !important;
  position: relative !important;
}
.sc-user-input--buttons {
  right: 16px !important;
  top: 16px !important;
}
.sc-message--content.sent .sc-message--text {
  max-width: calc(100% - 50px) !important;
}
.sc-message--text {
  padding: 6px 12px;
  p {
    margin-bottom: 0 !important;
  }
}
.sc-header--img {
    padding: 0 !important;
    width: 48px;
    height: 48px;
}
@media (max-width: 450px) {
  .sc-chat-window {
    bottom: 90px !important;
  }
}
@media (max-width: 576px) {
  .sc-chat-window {
  border-radius: 24px !important;
  max-height: 421px !important;
  width: 280px !important;
}
.sc-user-input--text {
  //   padding-left: 0 !important;
  margin-top: 16px !important;
  margin-bottom: 16px !important;
  padding-right: 60px !important;
  background: #f7f7f7 !important;
  border-radius: 12px !important;
  position: relative !important;
}
}
</style>
