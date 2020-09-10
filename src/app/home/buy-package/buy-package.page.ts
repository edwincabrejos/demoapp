import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-package',
  templateUrl: './buy-package.page.html',
  styleUrls: ['./buy-package.page.scss'],
})
export class BuyPackagePage implements OnInit {

  constructor() { }

  ngOnInit() {

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://autogestionttd.mimovistar.com.pe:4446/mcss/web/wic?Token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXhJbnB1dCI6eyJ3aWRnZXRGbG93VHlwZSI6IlBhY2thZ2UiLCJtc2lzZG4iOiI5MjA5NTg0NzYiLCJzYWxlc0NoYW5uZWxzIjoiU1MiLCJyZWRpcmVjdGlvblVybCI6Imh0dHBzOi8vdGZwd2x0c3QwNzozNjA2MS8ifSwicmVkaXJlY3Rpb25UZWZVcmwiOiJodHRwczovL3RmcHdsdHN0MDc6MzYwNjEvIiwiaWF0IjoxNTk4OTkwMjU1fQ.IPzSDIxJxyJCFH3By73ipRswa3JXqyDRxFHx3lG4BRe4dEgpN1YKOJ2CbzQMdNFyFNS-XWC1U9c_JPcatkz0Cf94GwVxKE7XANw_UMpY-CHQvTIhery7wmWno7XVPL6BLZlBYUNNH4pmsZkXi_dy_Z5BFBXoBmmuhgSUGIYTzbm-H_-46wgu2ysNu_LsATu0AxCRvev9SD-awBWg7xi-j_eysKqn2467OisbZV8iBpiDD6mKC4mNcEvyg_-1kBzylKpsR2FvvVxnWIzsrJA-gZl7Kc8vlX84xegtWgW3Cq3kO4q3MVfC9JVDjV9USDr6jGPrM1177Gw6SDavDZMIEqRhiN0zoeTX8egJkr5_GYYcVWjannBB0Ws2O-_E4BKdM4wWcPSadTJg_UAkiCg0tuziZu0TxAcNKHKBJdTCsLp9J445GaDaWF_Pw-RaTKNNc2qZIAmGJqEK2SEjKt-1jQErL6T3z-u6XgulqKEexQ_vYmw7Ms9NZ6HprsUfn6Tn0zOBYGLG0NyTH3rnAdv02cjNYBVXwMfcNHSBx0oIEeFgECRmG2l3hwpZ5Eh5oxwobcHzhxx7z0yHkEDaa5SuZ45wfrs8fGbjg4lUAJFBwy00lPRQ6ln_Vgi_tBJLMDdKXDjJ347BmOcKFOVWG0SswoJ88fZnp-vMwiCLPvKF7ek&RedirectionURL=https://autogestionttd.mimovistar.com.pe:4444/WidgetSelect';
    document.body.appendChild(form);
    form.submit();
  }

}
