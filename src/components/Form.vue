<template>
  <form>
    <span class="btn-exit">
      <SvgIcon name="backicon" class-name="icon-back"/>
    </span>
    <h3 class="title-modal">Subscribe</h3>
    <h4 class="badge">Add your card</h4>
    <p class="badge-block">
      <span>Ssocial is $2.25 per month.</span> Cancel anytime to stop future charges.
    </p>
    <label for="creditcard">
      <h5 class="sub-heading">Card information</h5>
    </label>
    <div class="inputs-block">
      <div class="input-block">
        <input
          type="text"
          name=""
          v-mask="'#### #### #### ####'"
          placeholder="1234 1234 1234 1234"
          id="creditcard"
        />
        <span class="cards">
          <SvgIcon name="visa" class-name="icon-cards" />
          <SvgIcon name="mastercard" class-name="icon-cards" />
        </span>
      </div>
      <div class="input-block bottom">
        <div class="input-item-block">
          <input type="text" v-mask="'##/##'" placeholder="MM/YY" :value="monthYear" @input="dateFilter()"/>
        </div>
        <div class="input-item-block">
          <input type="text" name="" v-mask="'###'" placeholder="CVC" />
          <span><SvgIcon name="cvc card" class-name="icon-cards" /></span>
        </div>
      </div>
    </div>
    <label for="namecard">
      <h5 class="sub-heading">Name on Card</h5>
    </label>
    <div class="inputs-block">
      <input type="text" name="" id="namecard" />
    </div>
    <button type="submit" class="btn-submit">Pay</button>
  </form>
</template>

<script>

export default {
  name: 'FormBlock',

  data () {
    return {
      monthYear: ''
    }
  },

  computed: {
  },

  methods: {
    currentY () {
      return new Intl.DateTimeFormat('en-EN', { year: '2-digit' }).format(new Date())
    },
    currentM () {
      return new Intl.DateTimeFormat('en-EN', { month: '2-digit' }).format(new Date())
    },
    dateFilter () {
      this.monthYear = event.target.value
      const date = event.target.value.split('/')
      if (date[0] > 12) {
        date[0] = '12/'
      }
      if (event.target.value.length === 5) {
        if (+date[1] < this.currentY()) {
          date[1] = this.currentY()
        }
        if (date[1] === this.currentY() && +date[0] < this.currentM()) {
          date[0] = this.currentM()
          console.log(date)
        }
      }
      this.monthYear = date.join('/')
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  border: none;
  padding: 10px 12px;
  font-weight: 600;
  font-size: 16px;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-family: "Nunito Sans";
    color: #cdcfd0;
    font-size: 15px;
  }
  border-radius: 8px;
}
form {
  position: relative;
  padding: 40px 32px;
  background: white;
  border-radius: 12px;
  font-family: "Nunito Sans";
  display: flex;
  flex-direction: column;
  .title-modal {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }
  .badge {
    font-weight: 700;
    color: #7fe58c;
    padding: 4px 0;
    width: 100%;
    font-size: 14px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    background: #dbffee;
    margin-bottom: 16px;
    margin-top: 30px;
    cursor: pointer;
  }
  .badge-block {
    text-align: center;
    font-size: 17px;
    font-weight: 400;
    color: #0a0a14;
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      width: 100%;
      display: block;
    }
  }
  .sub-heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 5px;
    margin-top: 20px;
    cursor: pointer;
  }

  .inputs-block {
    width: 100%;
    border: 1px solid rgba(60, 66, 87, 0.12);
    border-radius: 8px;
  }
  .bottom {
    border-top: 1px solid rgba(60, 66, 87, 0.12);
  }
  .input-block {
    width: 100%;
    display: flex;
    align-items: center;
    .cards {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-right: 5px;
    }
    input {
      flex: 1;
    }
    .input-item-block {
      width: 190px;
      display: flex;
      align-items: center;
      svg {
        margin-right: 5px;
      }
      &:first-child {
        border-right: 1px solid rgba(60, 66, 87, 0.12);
      }
    }
  }
  .btn-submit {
    background: #7fe58c;
    border-radius: 10px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: white;
    font-family: 'Nunito Sans';
    font-size: 16px;
    margin-top: 50px;
    cursor: pointer;
  }
  .btn-exit {
    position: absolute;
    top: 32px;
    left: 32px;
    cursor: pointer;
  }
}
</style>
