Pricali o strukturi projekta koji je napravaljen uspomoc vite biblioteke

Projekat se pravi sa komandom npm create vite

Ako imate neku gresku onda instalirate vite biblioteku globalno prvo: npm i -g vite Ako nemate node verziju 20 mozete imati problema.

Kada pokrenete npm create vite izberete ime projekta, react i onda javascript.

Node moduli se intaliraju sa komandom: npm install ili npm i

Pokretanje jednog ovakvog projekta se radi sa komandom:

npm run dev

Ova komanda mora da se pokrene unutar projekta koji ste napravili.

Struktura projketa je podeljena na dva dela: src folder predstavlja izvorni kod vase projekta Narodski recene sve sto radite je tu.

Fajlovi koji su izvan src foldera uglavnom predstavljaju neke konfiguracije za rad vaseg projekta.

Unutar src foldera imate main.jsx. Tu se vasa aplikacija pravi i stavlja unutar DOM-a.

Sta je JSX? Java Script XML Razlike izmedu JSX i HTML? Nauciti razlike

Ralike su: Unutar JSX mozete koristiti JavaScriptu direktno.

Sta su moduli? Kako radi import i export? Sta je komponenta? Komponenta je funkcija koja vraca JSX.

Pravila pravljenja komponenti: Komponenta se uvek pravi sa Velikim poctnim slovom. Komponenta mora uvek da vrati JSX. I komponenta mora da se exporta iz fajla gde je napravljena kako bi se korsitila u drugom fajlu.
