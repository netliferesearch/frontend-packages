/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import Tabs from 'ndla-tabs';

import { Icon, Button,
  MediaList, MediaListItem, MediaListItemBody, MediaListItemActions, MediaListItemImage, MediaListItemMeta,
} from '../../src';


const VideoContent = () => (
  <div>
    <h2>Slik bruker du videoer fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene. Husk å kopier teksten som skal legges ved bildet der du bruker det.</p>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <iframe
            width="200"
            height="113"
            src="https://www.youtube.com/embed/f9VriNNRn0U?feature=oembed"
            frameBorder="0"
            allowFullScreen=""
          />
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Embed className="c-modal__button-icon" /> Bygg inn</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const TextContent = () => (
  <div>
    <h2>Slik bruker du tekst fra artikkelen</h2>
    <p>Artikkelen kan være satt sammen av flere ulike tekster, som listes opp her. Klikk på lisensene for å se reglene for hver enkelt del.</p>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-sa" title="Tittel på tekst">
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-sa" title="Tittel på tekst">
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const AudioContent = () => (
  <div>
    <h2>Slik bruker du lydfiler</h2>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Audio className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-sa">
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Audio className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-sa">
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);

const ImageContent = () => (
  <div>
    <h2>Slik bruker du bilder fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene. Husk å kopier teksten som skal legges ved bildet der du bruker det.</p>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1463432786691-8ec0615f2dfe?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <a className="c-button c-button--small c-button--transparent" href="https://images.unsplash.com/photo-1463432786691-8ec0615f2dfe"><Icon.Link className="c-modal__button-icon" /> Gå til kilde</a>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.OpenWindow className="c-modal__button-icon" /> Vis bilde</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1470138831303-3e77dd49163e?dpr=1&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <a className="c-button c-button--small c-button--transparent" href="https://images.unsplash.com/photo-1463432786691-8ec0615f2dfe"><Icon.Link className="c-modal__button-icon" /> Gå til kilde</a>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.OpenWindow className="c-modal__button-icon" /> Vis bilde</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://cdntest-c.ndla.no/sites/default/files/images/ku-collage_v2_3.fullbredde.jpg" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Copy className="c-modal__button-icon" /> Kopier referanse</button>
            <a className="c-button c-button--small c-button--transparent" href="https://images.unsplash.com/photo-1463432786691-8ec0615f2dfe"><Icon.Link className="c-modal__button-icon" /> Gå til kilde</a>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.OpenWindow className="c-modal__button-icon" /> Vis bilde</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:', 'Verket består av...']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const H5PContent = () => (
  <div>
    <h2>Slik bruker du H5P-innhold fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene.</p>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <iframe src="http://ndla.no/nb/h5p/embed/146132?fag=127756" className="c-medialist__h5p" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Embed className="c-modal__button-icon" /> Bygg inn</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <iframe src="http://ndla.no/nb/h5p/embed/146135?fag=127756" className="c-medialist__h5p" width="260" height="373" frameBorder="0" allowFullScreen="allowfullscreen" /><script src="http://ndla.no/sites/all/modules/h5p/library/js/h5p-resizer.js?fag=127756" charSet="UTF-8" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Embed className="c-modal__button-icon" /> Bygg inn</button>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const LearningPath = () => (
  <div>
    <h2>Slik bruker du Læringssti-innhold fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene.</p>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&auto=format&fit=crop&w=1500&h=1124&q=80&cs=tinysrgb&crop=" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <img width="260" alt="alt" src="https://images.unsplash.com/photo-1476903930099-d0ddfec9a475?dpr=1&auto=format&fit=crop&w=1500&h=1124&q=80&cs=tinysrgb&crop=" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Grid className="c-modal__button-icon" /> Se del-elementer</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);


const Files = () => (
  <div>
    <h2>Slik bruker du filer fra artikkelen</h2>
    <p>Klikk på lisensene for å se reglene.</p>
    <MediaList>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
      <MediaListItem>
        <MediaListItemImage>
          <a href="">
            <Icon.Document className="c-medialist__icon" />
          </a>
        </MediaListItemImage>
        <MediaListItemBody locale="nb" license="by-nc-nd" >
          <MediaListItemActions>
            <button className="c-button c-button--small c-button--transparent" type="button"><Icon.Download className="c-modal__button-icon" /> Last ned</button>
          </MediaListItemActions>
          <MediaListItemMeta items={['12. desember 2014 / Oppdatert...', 'Opphavsperson: Ola Nordmann', 'Rettighetshaver: Kari Nordmann', 'Remikser:']} />
        </MediaListItemBody>
      </MediaListItem>
    </MediaList>
  </div>
);

const LicenseExample = () => (
  <div className="license c-licensebox c-licensebox--expanded">
    <Button stripped className="license-toggler site-nav_link" onClick={() => {}} >
      Lukk boks
    </Button>
    <div>
      <h1 className="license__heading">Hvordan gjenbruke innhold fra NDLA</h1>
      <p className="c-licensebox__introduction license__introduction">Alt innhold på NDLA har egne opphavsrettigheter. Disse må du ta hensyn til dersom du skal gjenbruke noe av dette innholdet utenfor ndla.no. Opphavsretten bestemmer hvordan du kan bruke innholdet, enten det skal publiseres, deles på internett, eller hvis noen skal tjene penger på det. Under kan du kan du se hvordan du kan bruke innholdet i fagstoff.</p>
      <Tabs
        tabs={[
            { title: 'Bilder', content: <ImageContent /> },
            { title: 'Tekst', content: <TextContent /> },
            { title: 'Video', content: <VideoContent /> },
            { title: 'Lyd', content: <AudioContent /> },
            { title: 'H5P', content: <H5PContent /> },
            { title: 'Læringssti', content: <LearningPath /> },
            { title: 'Filer', content: <Files /> },
        ]}
      />
    </div>
  </div>
);

LicenseExample.propTypes = {};


export default LicenseExample;
