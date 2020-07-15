import * as sorter from './SortManager';
import * as  searcher from './SearchManager';
import {Algo} from './Algo';

let s = new sorter.SortManager([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
s.doSort(Algo.BUBBLE);
s.doSort(Algo.SELECTION);
s.doSort(Algo.INSERT);


let s1 = new searcher.SearchManager([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

let searchNumOfIndex = s1.search(13, 0 , s1.input.length);
console.log('13 of index -->array('+searchNumOfIndex +")  ::::> " + s1.input[searchNumOfIndex]);
