import React from "react";
import "./ListesMeubles.css";
import ObjectsDetails from "./ObjectsDetails";
import { useState } from "react";

const ListeMeubles = ({
  chairBoss,
  handlBossChairIndex,
  desk,
  setActiveDeskIndex,
  activeChairBossIndex,
  setActiveChairBossIndex,
}) => {
  const hndlClick = (index) => {
    handlBossChairIndex(index);
  };

  const [objecdetails, setObejctDetail] = useState(false);

  return (
    <div>
      <div className="sidebar">
        <ul className="nav-bar">
          <li className="categorie">
            Meuble de Bureau
            <ul className="sous-categorie">
              <li>
                Bureau
                <ul>
                  {desk.map((desk, idx) => (
                    <li
                      onPointerEnter={() => setActiveDeskIndex(idx)}
                      key={idx}
                      className="sub-categorie"
                    >
                      {desk.name}
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                Chaise Directeur
                <ul>
                  {chairBoss.map((chair, idx) => (
                    <li
                      onPointerEnter={() => {
                        setObejctDetail(true);
                        setActiveChairBossIndex(idx);
                        console.log(objecdetails);
                      }}
                      onPointerLeave={()=>setObejctDetail(false)}
                      className="sub-categorie"
                      key={idx}
                    >
                      {chair.name}
                    </li>
                  ))}
                </ul>
              </li>
              <li>Chaise Invité</li>
            </ul>
          </li>
          <li className="categorie">
            Meuble de salon
            <ul className="sous-categorie">
              <li>Canapé</li>
              <li>Table Basse</li>
              <li>Bibliothèque</li>
            </ul>
          </li>
          <li className="categorie">
            Meuble de chambre
            <ul className="sous-categorie">
              <li>Lit</li>
              <li>Armoire</li>
              <li>Coiffeuse</li>
            </ul>
          </li>
        </ul>
      </div>
      {objecdetails && (
        <ObjectsDetails
          chairBoss={chairBoss}
          activeChairBossIndex={activeChairBossIndex}
          objecdetails={objecdetails}
        />
      )}
    </div>
  );
};

export default ListeMeubles;
