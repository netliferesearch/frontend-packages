/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

import { OneColumn, LayoutItem } from 'ndla-ui';
import { Time, Pencil, User } from 'ndla-ui/icons';

import { ResourceSubsetList } from '../molecules/resources';
import FigureWithLicense from '../article/FigureWithLicense';
import LicenseExample from '../article/LicenseExample';
import article from '../../dummydata/index';

export default () =>
  <OneColumn cssModifier="narrow">
    <article className="c-article">
      <LayoutItem layout="center">
        <h1 className="c-article__title--icon">
          <Pencil />Oppgave eller aktivitet
        </h1>
        <p className="article_introduction">
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen.
        </p>
        <div className="c-article-byline">
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <User />
            </span>
            <span className="c-article-byline__authors">
              Skrevet av Ola Nordnes, Kari Nordnes, Jon Nordgubbe.
            </span>
          </span>
          <span className="c-article-byline__flex">
            <span className="c-article-byline__icon">
              <Time />
            </span>
            <span className="c-article-byline__date">Publisert 12/10/2016</span>
            <LicenseExample />
          </span>
        </div>
      </LayoutItem>
      <LayoutItem layout="center">
        <p>
          Du har en kjempegod idé til en kortfilm. Men det koster mange penger å
          produsere filmen. Derfor er du avhengig av at noen tenner på idéen din
          og bestemmer seg for å bruke ressurser på nettopp dette prosjektet.
        </p>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du få
          andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
        <FigureWithLicense>
          <iframe
            title="H5P"
            src="http://ndla.no/nb/h5p/embed/146132?fag=127756"
            width="260"
            height="373"
            frameBorder="0"
            allowFullScreen="allowfullscreen"
          />
          <script
            src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756"
            charSet="UTF-8"
          />
        </FigureWithLicense>
        <p>
          En pitch er en kortvarig framføring av en idé for en potensiell
          samarbeidspartner eller kunde. I løpet av noen få minutter skal du få
          andre til å tenne på idéen din og se potensialet i den.
        </p>
        <p>
          Pitching er også en god måte å bevisstgjøre seg selv på. Når du
          pitcher, blir idéen og historien i den filmen du planlegger å lage,
          tydeligere for både deg selv og dem du eventuelt jobber sammen med i
          klassen.
        </p>
      </LayoutItem>
      <LayoutItem layout="extend">
        <ResourceSubsetList />
      </LayoutItem>
    </article>
  </OneColumn>;