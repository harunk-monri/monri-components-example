## Instructions:

### Step 1: Obtain an Access Token

1. Make a POST request to `https://ipgtest.monri.com/v2/oauth` with the following parameters in the request body:

   ```json
   {
     "client_id": "Authenticity_token",
     "client_secret": "Merchant_Key",
     "scopes": ["payments"],
     "grant_type": "client_credentials"
   }
   ```

   - Replace `"Authenticity_token"` with your actual client ID.
   - Replace `"Merchant_Key"` with your actual client secret.

2. You will receive an access token in the response. This token will be required to initiate the payment.

### Step 2: Initiate the Payment Form

1. Make a GET request to `https://ipgtest.monri.com/v2/payment/new` to initiate the payment form.

2. You can add any additional parameters or details required for your specific payment needs to this request. Refer to Monri API documentation for details on customization.

3. The response will contain the payment form or information necessary to proceed with the payment process.

Now you have successfully obtained an access token and initiated the payment form using Monri API. Make sure to handle any further steps and processing as per your specific integration requirements.

Please note that this guide assumes you have the necessary authentication and permissions to use the Monri API and that you have the required client ID and secret. Additionally, ensure that you follow any specific guidelines or documentation provided by Monri for integrating their payment system.

<img width="1150" alt="image" src="https://github.com/harunk-monri/monri-components-example/assets/111092131/bd9b8467-048e-4f2d-962f-f4dee04f10b6">


More detailed instructions are available at: https://ipgtest.monri.com/en/documentation/components
