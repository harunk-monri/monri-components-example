import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'monri-components-example';

  ngOnInit(): void {
    const authenticity_token = "c81a1ac53bf3b7e553583a7cd2f542f92ad50671";
    const client_secret = "834d7ce110f16d7a1fe131d47f258c42dd162f3f";

    let monri = (window as any).Monri(authenticity_token, {locale: "hr"})
    let components = monri.components({clientSecret: client_secret});
    //create one using your backend endpoint payment/new

    let card: any = components.create("card", {
      style: {
        base: {
          fontFamily: 'SourceSansPro'
        },
        invalid: {
          color: '#ff7a69',
        },
        complete: {
          color: '#575757',
        },
        input: {
          base: {
            fontSize: '16px',
            color: "#8132A7FF",
            backgroundColor: "#fbfbfb",
            borderRadius: "6px",
            border: "none"
          }
        }
        ,
        rememberCardLabel: {
          base: {
            fontSize: '11px',
            color: "#575757",
          }
        }
        ,
        background: {
          backgroundColor: '#FFFFFF'
        }
      }
    })
    card.mount("card-element");
    const form = document.getElementById('payment - form');
    form?.addEventListener('submit', function (event) {
        event.preventDefault();
        monri.confirmPayment(card, {
          address: "Adresa",
          fullName: "Harun Kološ",
          city: "Sarajevo",
          zip: "71000",
          phone: "+38761000111",
          country: "BA",
          email: "angular-components-test@monri.com",
          orderInfo: "Test transaction monri components example",
          language: 'en'
        }).then(function (result: any) {
          if (result.error) {
            console.error(result.error)
          } else if (result.result.status === "approved") {
            alert(result.result.status)
            console.log(result.result)
          } else {
            console.error(result);
          }
        }).catch((err: any) => {
          console.log('Global error:', err)
        })
      }
    )
  }
}
