import BaseComponent from '../../components/base-component';
import {Intro} from './interface';
import Data from '../../data/intro.json';

const Service = {

    getIntroData():Intro {
        let intro : Intro = Data;
        return intro
    }
}

export default Service;
