//Create User
this.axios.post(baseUrl + '/users', {
    enabled: 1,
    username: this.form.username,
    password: this.form.password,
  })
  .then(function (responseUser) {
      //Create Customer
      console.log(responseUser.content.id);
      this.axios.post(baseUrl + '/users/' + responseUser.content.id + '/customers', {
        address: this.form.address,
        state: 1,
        name: this.form.name,
      })
      .then(function (responseCustomer) {
          //Create Credit Account
          var rateType = this.convertRateType()
          let today = new Date().toISOString()
          this.axios.post(baseUrl + '/customers/' + responseCustomer.content.id + '/creditAccounts', {
            state: 1,
            generated_date: today,
            interest_rate: rateType,
            interest_rate_value: parseFloat(this.form.rate),
            balance: parseFloat(this.form.account),
            actual_balance: parseFloat(this.form.account),
          })
          .then(function (responseAccount) {
              //Create Payment
              this.axios.post(baseUrl + '/creditAccounts/' + responseAccount.content.id + '/payment', {
                state: 1,
              })
              .then(function (response) {
                
              })
              .catch(function (error) {
                alert("No se pudo crear el pago de forma correcta");
              });
          })
          .catch(function (error) {
            alert("No se pudo crear la cuenta de forma correcta");
          });
      })
      .catch(function (error) {
        alert("No se pudo crear el cliente de forma correcta");
      });
  })
  .catch(function (error) {
    alert("No se pudo crear el usuario de forma correcta");
  });