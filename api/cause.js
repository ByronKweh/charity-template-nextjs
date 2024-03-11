import cimg1 from '/public/images/campaign/1.jpg'
import cimg2 from '/public/images/campaign/2.jpg'
import cimg3 from '/public/images/campaign/3.jpg'

import eimg1 from '/public/images/campaign/4.jpg'
import eimg2 from '/public/images/campaign/5.jpg'
import eimg3 from '/public/images/campaign/6.jpg'

import ocimg1 from '/public/images/campaign/7.jpg'
import ocimg2 from '/public/images/campaign/8.jpg'
import ocimg3 from '/public/images/campaign/9.jpg'

import wpimg1 from '/public/images/campaign/10.jpg'
import wpimg2 from '/public/images/campaign/11.jpg'
import wpimg3 from '/public/images/campaign/12.jpg'

import cimgSingle from '/public/images/cause-single/1.jpg'
import cimgSingle2 from '/public/images/cause-single/2.jpg'
import cimgSingle3 from '/public/images/cause-single/3.jpg'

import eimgSingle from '/public/images/cause-single/4.jpg'
import eimgSingle2 from '/public/images/cause-single/5.jpg'
import eimgSingle3 from '/public/images/cause-single/6.jpg'

import ocimgSingle from '/public/images/cause-single/7.jpg'
import ocimgSingle2 from '/public/images/cause-single/8.jpg'
import ocimgSingle3 from '/public/images/cause-single/9.jpg'

import wpimgSingle from '/public/images/cause-single/10.jpg'
import wpimgSingle2 from '/public/images/cause-single/11.jpg'
import wpimgSingle3 from '/public/images/cause-single/12.jpg'

import author from '/public/images/campaign/1.png'

const Causes = [
    {
        id: '1',
        cImg:cimg1,
        cImgSingle:cimgSingle,
        process:'65',
        thumb:'Education',
        cTitle: 'Help To Build a Secure Life Of a Poor Children.',
        slug:'Poor-Children', 
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '2',
        cImg:cimg2,
        cImgSingle:cimgSingle2,
        process:'75',
        thumb:'Food',
        cTitle: 'Ensure Clean Water To The African Kids.', 
        slug:'African-Kids',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '3',
        cImg:cimg3,
        cImgSingle:cimgSingle3,
        process:'85',
        thumb:'Medicine',
        cTitle: 'Your Help Can Save A Human Life From Death.', 
        slug:'Human-Life',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '4',
        cImg:eimg1,
        cImgSingle:eimgSingle,
        process:'95',
        thumb:'Elephant',
        cTitle: 'Ensure a Secure Life Of The African Elephant.', 
        slug:'African-Elephant',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '5',
        cImg:eimg2,
        cImgSingle:eimgSingle2,
        process:'55',
        thumb:'Tiger',
        cTitle: 'Don’t Shoot The Royel Tiger With Your Gun.', 
        slug:'Royel-Tiger',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '6',
        cImg:eimg3,
        cImgSingle:eimgSingle3,
        process:'35',
        thumb:'WildLife',
        cTitle: 'Help Us To Stop Illigal Sale Of Wild Meat.',
        slug:'Wild-Meat', 
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '7',
        cImg:ocimg1,
        cImgSingle:ocimgSingle,
        process:'95',
        thumb:'Ocean',
        cTitle: 'Ensure a Secure Life Of The Ocean Creature.', 
        slug:'Ocean-Creature',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '8',
        cImg:ocimg2,
        cImgSingle:ocimgSingle2,
        process:'55',
        thumb:'Cleaning',
        cTitle: 'The oceans deserve our respect and care.', 
        slug:'oceans-deserve',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '9',
        cImg:ocimg3,
        cImgSingle:ocimgSingle3,
        process:'35',
        thumb:'Ocean',
        cTitle: 'Help Us To Stop Illigal Catching of Fish.', 
        slug:'Catching-of-Fish',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '10',
        cImg:wpimg1,
        cImgSingle:wpimgSingle,
        process:'85',
        thumb:'Vaccin',
        cTitle: 'We are Giving Vaccin in All Over The World.', 
        slug:'Giving-Vaccin',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '11',
        cImg:wpimg2,
        cImgSingle:wpimgSingle2,
        process:'75',
        thumb:'Medical',
        cTitle: 'Ensuring Physical Treatment in Many Countyies.', 
        slug:'Ensuring-Physical',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
    {
        id: '12',
        cImg:wpimg3,
        cImgSingle:wpimgSingle3,
        process:'95',
        thumb:'Corona',
        cTitle: 'Cullecting Sample and Testing in Laboratory', 
        slug:'Cullecting-Sample',
        Goal:'3,000.00',
        Raised:'2,000.00',
        authorImg:author,
        authorName:'Laura Faiary',
    },
]

export default Causes;