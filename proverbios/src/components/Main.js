import './styleMain.css'

import { Proverbio1 } from './Proverbio1';
import { Proverbio2 } from './Proverbio2';
import { Proverbio3 } from './Proverbio3';
import { Proverbio4 } from './Proverbio4';
import { Proverbio5 } from './Proverbio5';
import { Proverbio6 } from './Proverbio6';
import { Proverbio7 } from './Proverbio7';
import { Proverbio8 } from './Proverbio8';
import { Proverbio9 } from './Proverbio9';
import { Proverbio10 } from './Proverbio10';
import { Proverbio11 } from './Proverbio11';
import { Proverbio12 } from './Proverbio12';
import { Proverbio13 } from './Proverbio13';
import { Proverbio14 } from './Proverbio14';
import { Proverbio15 } from './Proverbio15';
import { Proverbio16 } from './Proverbio16';
import { Proverbio17 } from './Proverbio17';
import { Proverbio18 } from './Proverbio18';
import { Proverbio19 } from './Proverbio19';
import { Proverbio20} from './Proverbio20';
import { Proverbio21 } from './Proverbio21';
import { Proverbio22 } from './Proverbio22';
import { Proverbio23 } from './Proverbio23';
import { Proverbio24 } from './Proverbio24';
import { Proverbio25 } from './Proverbio25';
import { Proverbio26 } from './Proverbio26';
import { Proverbio27 } from './Proverbio27';
import { Proverbio28 } from './Proverbio28';
import { Proverbio29 } from './Proverbio29';
import { Proverbio30 } from './Proverbio30';
import { Proverbio31 } from './Proverbio31';

export const Main = () => {
  const diaAtual = new Date().getDate();
  return (
    <main className='containerMain'> 
        <p className='main-p'>"Explore a cada dia um novo provérbio bíblico em nosso site. Deixe-se envolver pela sabedoria atemporal das Escrituras, enquanto você descobre insights que podem iluminar seu caminho. Cada página traz uma nova pérola de inspiração. Aproveite este presente diário para enriquecer sua jornada."</p>
        {diaAtual === 1 && <Proverbio1 />}
        {diaAtual === 2 && <Proverbio2 />}
        {diaAtual === 3 && <Proverbio3 />}
        {diaAtual === 4 && <Proverbio4 />}
        {diaAtual === 5 && <Proverbio5 />}
        {diaAtual === 6 && <Proverbio6 />}
        {diaAtual === 7 && <Proverbio7 />}
        {diaAtual === 8 && <Proverbio8 />}
        {diaAtual === 9 && <Proverbio9 />}
        {diaAtual === 10 && <Proverbio10 />}
        {diaAtual === 11 && <Proverbio11 />}
        {diaAtual === 12 && <Proverbio12 />}
        {diaAtual === 13 && <Proverbio13 />}
        {diaAtual === 14 && <Proverbio14 />}
        {diaAtual === 15 && <Proverbio15 />}
        {diaAtual === 16 && <Proverbio16 />}
        {diaAtual === 17 && <Proverbio17 />}
        {diaAtual === 18 && <Proverbio18 />}
        {diaAtual === 19 && <Proverbio19 />}
        {diaAtual === 20 && <Proverbio20 />}
        {diaAtual === 21 && <Proverbio21 />}
        {diaAtual === 22 && <Proverbio22 />}
        {diaAtual === 23 && <Proverbio23 />}
        {diaAtual === 24 && <Proverbio24 />}
        {diaAtual === 25 && <Proverbio25 />}
        {diaAtual === 26 && <Proverbio26 />}
        {diaAtual === 27 && <Proverbio27 />}
        {diaAtual === 28 && <Proverbio28 />}
        {diaAtual === 29 && <Proverbio29 />}
        {diaAtual === 30 && <Proverbio30 />}
        {diaAtual === 31 && <Proverbio31 />}
        <p className='main-p'>"Descubra a sabedoria e inspiração escondidas nos Provérbios Bíblicos a cada dia. Em apenas alguns minutos, você pode ganhar uma perspectiva valiosa sobre a vida, o amor, as escolhas e a conduta. Cada provérbio é uma pérola de conhecimento atemporal que pode iluminar seu caminho e enriquecer sua jornada. Ao ler um Provérbio Bíblico por dia, você estará investindo em seu crescimento pessoal e espiritual. Essa prática simples pode trazer reflexões profundas e insights que se traduzirão em uma vida mais significativa. Abra as páginas da sabedoria todos os dias e deixe que essas palavras antigas inspirem seu presente."</p>
    </main>
  )
}

