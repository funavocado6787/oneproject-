<template>
  <v-container>
    <h3>Contact Glenn</h3>
    <div v-if="!sent">
      <form name="contactForm" @submit.prevent="handleSubmit">
        <transition
          name="post-message-animation"
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX"
        >
          <div v-if="message && message.text">
            <div
              class="alert"
              :class="{'alert-success': message.type === 'success'}"
              role="alert"
            >{{message.text}}</div>
          </div>
        </transition>

        <transition
          v-if="message.type === 'error'"
          name="error-animation"
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX"
        >
          <div class="alert alert-danger" role="alert">
            <strong>Doh!</strong>
            {{message.text}}
          </div>
        </transition>

        <div class="col-md-12">
          <v-text-field
            outlined
            label="Name"
            type="text"
            id="name"
            class="form-control"
            data-vv-rules="required"
            data-vv-as="Name"
            name="name"
            v-model="contact.Name"
            placeholder="name"
            v-validate
          />

          <v-text-field
            outlined
            label="Email Address"
            type="email"
            id="from"
            data-vv-rules="required"
            data-vv-as="Email"
            name="from"
            v-model="contact.Email"
            placeholder="email address"
            v-validate
          />

          <v-textarea
            outlined
            label="Message"
            palceholder="Message"
            id="message"
            v-model="contact.Message"
            data-vv-rules="required"
            data-vv-as="Message"
            name="message"
            v-validate
          />

          <v-btn color="primary" type="submit">Send</v-btn>
        </div>
      </form>

      <v-snackbar
        v-model="showSnak"
        :multi-line="true"
        :right="true"
        :timeout="3000"
        :top="true"
        :color="message.type"
      >{{ message.text }}</v-snackbar>
    </div>

    <div v-if="sent">
      <div class="row">
        <div class="col-md-4">
          <img class="circleimage" src="/images/GlennPacker.jpg" />
        </div>
        <div class="col-md-4">
          <p>Thanks for contacting us.</p>
          <p>We will get back to you as soon as we can.</p>
        </div>
        <div class="col-md-4 text-right">
          <img class="circleimage" src="/images/cat-waiting-for-the-mail.jpg" />
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      sent: false,
      message: {},
      contact: {},
      showSnak: false
    };
  },
  head() {
    return {
      title: "Contact GlennPacker.net",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "contact glennpacker.net"
        }
      ]
    };
  },
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then(success => {
        if (success) {
          this.sendContact();
        }

        return this;
      });
    },
    async sendContact() {
      try {
        await this.$axios.$post(
          "http://glennpacker.net/api/contact",
          this.contact
        );
        this.message = {
          type: "success",
          text: "Message Sent!"
        };
      } catch (err) {
        this.message = {
          type: "error",
          text: errorResponse.message
        };
      } finally {
        this.showSnak = true;
      }
    }
  }
};
</script>
