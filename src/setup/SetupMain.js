import React, { useState, useEffect } from "react";
import db from "../firebase/config";
import { Container, Row, Col } from "reactstrap";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const SetupMain = () => {
  const [setups, setSetups] = useState([]);

  useEffect(() => {
    db.collection("setup").onSnapshot((snapshot) =>
      setSetups(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="setupMain">
      {setups.map((setup) => (
        <div className="setupImage">
          <img src={setup.image} alt="..." />
        </div>
      ))}
      <Container>
        <Row>
          <Col md="12">
            <div className="mySetup">
              <span className="laptopSpecs">
                <ul>
                  <a
                    href="https://ruj.uj.edu.pl/xmlui/bitstream/handle/item/1295/bankowicz_ronald_reagan_droga_do_politycznej_wielkosci_2012.pdf?sequence=1&isAllowed=y"
                    target="_blank"
                  >
                    <h2>I kadencja</h2> <ArrowUpwardIcon />
                  </a>
                  <li>
                    Ogłosił sankcje gospodarcze przeciwko reżimowi Jaruzelskiego
                    po wprowadzeniu w PRL stanu wojennego
                  </li>
                  <li>Reagan był zwolennikiem monetaryzmu</li>
                  <li>
                    Przywrócił wzrost ekonomiczny z wcześniejszych okresów
                  </li>
                  <li>Przeciwdziałał dwucyfrowemu bezrobociu</li>
                  <li>Obniżył podatki o 25%</li>
                  <li>Ograniczył wydatki administracji państwowej</li>
                  <li>Uprościł przepisy</li>
                  <li>Zwiększył wydatki na cele wojskowe o 30%</li>
                  <li>Wdrożył program Inicjatywy Obrony Strategicznej</li>
                </ul>
              </span>
              <span className="laptopSpecs">
                <ul>
                  <a
                    href="https://repozytorium.ka.edu.pl/bitstream/handle/11315/28284/BRYK_Ronald_Reagan_a_wyzwania_2005.pdf?sequence=1&isAllowed=y"
                    target="_blank"
                  >
                    <h2>II kadencja</h2> <ArrowUpwardIcon />
                  </a>
                  <li>
                    W 1985 rozpoczął rokowania rozbrojeniowe ze Związkiem
                    Radzieckim
                  </li>
                  <li>
                    Na początku 1986 zapowiedział kontynuację programu badań
                    kosmicznych
                  </li>
                  <li>
                    4 marca 1987 prezydent wygłosił orędzie, w którym przyznał
                    się do błędu i wziął na siebie pełną odpowiedzialność za
                    aferę Iran-Contras
                  </li>
                  <li>
                    8 grudnia 1987 podpisał porozumienie INF z Gorbaczowem w
                    Waszyngtonie dotyczące ograniczenia rakiet średniego i
                    krótkiego zasięgu
                  </li>
                  <li>
                    W lecie 1988 Reagan udzielił stanowczego poparcia swojemu
                    wiceprezydentowi – George’owi Bushowi
                  </li>
                </ul>
              </span>
              <span className="keyboardSpecs">
                <ul>
                  <h2>Emerytura</h2>
                  <li>
                    Były prezydent zajmował się wygłaszaniem wykładów i pisaniem
                    pamiętników
                  </li>
                  <li>
                    Czasami udawał się w podróże, m.in. do Japonii w 1989 i do
                    Polski rok później
                  </li>
                  <li>
                    W czasach administracji George’a Busha udzielał rad
                    prezydentowi
                  </li>
                </ul>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SetupMain;
