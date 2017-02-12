(function () {
  var app = angular.module('companyStore' , ['store-members']);

  app.controller('StoreController', function(){
    this.members = users; 

  });

  app.controller('ReviewController' , function() {
    this.review = {};

    this.addReview = function(member) {
      this.review.createOn = Date.now();
      member.review.push(this.review);
      this.review = {};
    }
  });
  
  var users = [
  {
    "_id": "589df31646c212f0f706da9d",
    "index": 0,
    "guid": "dc185b55-e912-41bf-92ce-6b7c65956d3e",
    "isActive": false,
    "balance": "$2,890.82",
    "picture": "http://placehold.it/200",
    "age": 39,
    "eyeColor": "blue",
    "name": "Dixon Wooten",
    "gender": "male",
    "company": "VISUALIX",
    "email": "dixonwooten@visualix.com",
    "phone": "+1 (893) 423-2511",
    "address": "223 Beard Street, Chapin, Alabama, 6037",
    "about": "Et sint veniam quis aliquip do magna in sint. Consectetur tempor ut Lorem excepteur pariatur voluptate non proident consequat sint. Aute consequat dolor ut cillum duis eu eiusmod labore ad nulla nisi officia dolor. Mollit id excepteur ullamco laborum Lorem consequat cupidatat velit fugiat. Id in cupidatat aliqua in proident deserunt pariatur nisi irure est aliquip ex adipisicing. Dolore quis esse pariatur aute sunt laborum aute consectetur aliqua nisi ea. Magna magna nulla id dolore eiusmod est non reprehenderit et officia.\r\n",
    "registered": "2014-10-06T03:04:57 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df316a51e522ef683a0bd",
    "index": 1,
    "guid": "3d5a0187-e7b5-4579-b0b3-c7c20b384495",
    "isActive": false,
    "balance": "$1,055.95",
    "picture": "http://placehold.it/200",
    "age": 37,
    "eyeColor": "brown",
    "name": "Walter Clayton",
    "gender": "male",
    "company": "WATERBABY",
    "email": "walterclayton@waterbaby.com",
    "phone": "+1 (988) 426-3996",
    "address": "155 Ryder Street, Spokane, Texas, 2768",
    "about": "Eiusmod ex non incididunt incididunt minim fugiat dolor ut. Elit magna velit voluptate amet in pariatur. Veniam quis duis exercitation eiusmod aliquip elit ipsum deserunt ad dolor nisi do cupidatat. Incididunt et aute occaecat quis labore excepteur et. Do dolor est aute adipisicing officia ipsum.\r\n",
    "registered": "2016-09-14T05:33:33 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df316ed9a223b5e56f98e",
    "index": 2,
    "guid": "45485618-0538-4d72-8835-457feba55216",
    "isActive": true,
    "balance": "$3,986.62",
    "picture": "http://placehold.it/200",
    "age": 27,
    "eyeColor": "brown",
    "name": "Flynn Cline",
    "gender": "male",
    "company": "PHARMEX",
    "email": "flynncline@pharmex.com",
    "phone": "+1 (982) 448-3601",
    "address": "663 Whitwell Place, Corriganville, New Hampshire, 9750",
    "about": "Amet commodo sint officia laboris laborum laborum ut ad ex. Incididunt aliquip sunt laborum ipsum amet. Exercitation est aliquip cupidatat amet ullamco ipsum mollit consectetur incididunt. Est adipisicing commodo duis sit. Et in do non proident elit.\r\n",
    "registered": "2014-10-17T05:50:06 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df316ef0d9b29987fc579",
    "index": 3,
    "guid": "1eeb3b0c-6b79-4a79-9cfa-21d02ace0190",
    "isActive": false,
    "balance": "$2,449.49",
    "picture": "http://placehold.it/200",
    "age": 34,
    "eyeColor": "blue", 
    "name": "Joyce Shields",
    "gender": "female",
    "company": "SURELOGIC",
    "email": "joyceshields@surelogic.com",
    "phone": "+1 (995) 573-3447",
    "address": "977 Bush Street, Sabillasville, Tennessee, 4129",
    "about": "Non magna fugiat ullamco esse deserunt proident do consectetur amet minim mollit occaecat. Sit consequat mollit Lorem Lorem laborum commodo est sit veniam dolore dolor occaecat adipisicing excepteur. Sunt ut ex laboris enim aute sint amet dolore sint laborum. Irure proident occaecat sint dolor ullamco pariatur. Adipisicing aliqua nulla cupidatat incididunt est magna ex eu pariatur aliquip ipsum. Sint do voluptate enim voluptate officia exercitation sit laboris non occaecat non reprehenderit enim. Officia consequat aute mollit adipisicing exercitation dolore aliqua consequat in adipisicing mollit.\r\n",
    "registered": "2016-10-17T04:10:13 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df3160dcf4b15b3f93c42",
    "index": 4,
    "guid": "b955015b-d153-46c0-8494-51016b2e5443",
    "isActive": false,
    "balance": "$2,055.27",
    "picture": "http://placehold.it/200",
    "age": 34,
    "eyeColor": "brown",
    "name": "Cathleen Morrison",
    "gender": "female",
    "company": "EXOTECHNO",
    "email": "cathleenmorrison@exotechno.com",
    "phone": "+1 (990) 575-2794",
    "address": "277 Olive Street, Condon, Arizona, 3315",
    "about": "Velit eiusmod culpa deserunt irure dolore et elit quis qui cillum. Proident voluptate magna qui irure cillum aute aute veniam. Adipisicing reprehenderit amet elit labore voluptate ea minim occaecat duis. Aliquip esse Lorem laboris aliquip exercitation ea aliqua ex officia anim officia. Excepteur minim reprehenderit esse et cillum est voluptate duis non voluptate ipsum. Proident magna culpa commodo adipisicing tempor enim excepteur in nulla dolore. Eu pariatur non pariatur et irure consequat amet labore ullamco culpa adipisicing elit.\r\n",
    "registered": "2014-06-27T08:24:07 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df316692b0cb2fd7c48e5",
    "index": 5,
    "guid": "84ddc250-78c4-47aa-9ad8-50526f142ffe",
    "isActive": true,
    "balance": "$3,249.01",
    "picture": "http://placehold.it/200",
    "age": 22,
    "eyeColor": "blue",
    "name": "Frederick Cooper",
    "gender": "male",
    "company": "RECRISYS",
    "email": "frederickcooper@recrisys.com",
    "phone": "+1 (831) 596-2311",
    "address": "567 Tillary Street, Clara, Nebraska, 6861",
    "about": "Esse consectetur pariatur ea deserunt. Do Lorem laborum officia consequat sunt minim. Nisi dolor incididunt dolor minim est proident tempor fugiat sit nulla aliquip velit dolor. Aute ullamco laboris elit amet irure eiusmod laboris proident elit do fugiat aliquip nostrud irure. Ut id minim in exercitation consectetur consequat. Et nostrud ipsum deserunt mollit in tempor proident cillum amet. Eu anim sunt proident Lorem sit dolor consequat ex labore sit consectetur nulla consequat amet.\r\n",
    "registered": "2014-02-08T12:46:36 -02:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df3161441662a5bb7e879",
    "index": 6,
    "guid": "e21a4176-aba6-484c-815c-4802ce9ec4fe",
    "isActive": false,
    "balance": "$2,137.47",
    "picture": "http://placehold.it/200",
    "age": 28,
    "eyeColor": "blue",
    "name": "Marie Levy",
    "gender": "female",
    "company": "AQUOAVO",
    "email": "marielevy@aquoavo.com",
    "phone": "+1 (823) 555-2482",
    "address": "708 Desmond Court, Fowlerville, North Carolina, 3423",
    "about": "Cillum laborum proident sunt sint ea nostrud enim esse sunt. Eu nisi ea culpa ad reprehenderit. Non minim sint adipisicing dolor consequat. Officia laboris esse mollit ex consectetur aliqua nulla esse irure.\r\n",
    "registered": "2015-03-21T05:35:48 -02:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df3160541863a5141f583",
    "index": 7,
    "guid": "a71759c3-3d12-46b1-b512-ae307c203736",
    "isActive": false,
    "balance": "$2,674.23",
    "picture": "http://placehold.it/200",
    "age": 21,
    "eyeColor": "blue",
    "name": "Liza Randolph",
    "gender": "female",
    "company": "QUONATA",
    "email": "lizarandolph@quonata.com",
    "phone": "+1 (944) 563-3593",
    "address": "524 Banner Avenue, Fingerville, Oregon, 1326",
    "about": "Eiusmod proident sit enim veniam laborum cillum reprehenderit adipisicing enim nisi. Magna incididunt qui dolore magna in in laboris. Amet fugiat amet excepteur dolore Lorem veniam dolore et eu consequat. Labore nulla labore tempor officia nulla anim. Velit deserunt sit ea quis ut cupidatat elit enim occaecat reprehenderit fugiat.\r\n",
    "registered": "2014-08-30T11:14:36 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df3164395b2d2c4f8fa36",
    "index": 8,
    "guid": "c130e5bf-00e0-4bf7-bb92-d21fb92cd793",
    "isActive": true,
    "balance": "$1,531.79",
    "picture": "http://placehold.it/200",
    "age": 38,
    "eyeColor": "blue",
    "name": "Perkins Russo",
    "gender": "male",
    "company": "OVIUM",
    "email": "perkinsrusso@ovium.com",
    "phone": "+1 (939) 474-3580",
    "address": "829 Coyle Street, Dunnavant, Maine, 8239",
    "about": "Id nostrud velit excepteur pariatur nisi proident cupidatat velit officia fugiat. Amet laborum amet laborum velit dolor nisi est eu officia laboris sit fugiat minim sit. Reprehenderit fugiat ea adipisicing qui cillum. Eiusmod aute sunt amet ad. In eiusmod dolore deserunt pariatur anim fugiat nostrud irure quis sunt labore. Mollit voluptate anim magna reprehenderit culpa dolore dolor commodo.\r\n",
    "registered": "2015-12-24T01:47:40 -02:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df316eecf2be1c91a1b29",
    "index": 9,
    "guid": "aaeb11ee-f8ae-40f4-9077-b26636ffac82",
    "isActive": false,
    "balance": "$2,228.41",
    "picture": "http://placehold.it/200",
    "age": 40,
    "eyeColor": "blue",
    "name": "Bessie Delgado",
    "gender": "female",
    "company": "PYRAMAX",
    "email": "bessiedelgado@pyramax.com",
    "phone": "+1 (880) 448-2999",
    "address": "235 Hoyts Lane, Veyo, Oklahoma, 7302",
    "about": "Et est eu culpa proident labore dolore ipsum ut cupidatat. Officia incididunt sunt sint non id exercitation adipisicing fugiat est aliquip deserunt exercitation minim nulla. Officia Lorem non dolor reprehenderit. Consectetur ullamco in commodo aute aliquip do cupidatat sit.\r\n",
    "registered": "2016-01-31T09:38:02 -02:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df3165d994b5301dd132a",
    "index": 10,
    "guid": "e293d034-bb43-4c43-a484-cb32f05fa2f5",
    "isActive": false,
    "balance": "$1,994.11",
    "picture": "http://placehold.it/200",
    "age": 27,
    "eyeColor": "blue",
    "name": "Letitia Burch",
    "gender": "female",
    "company": "SOPRANO",
    "email": "letitiaburch@soprano.com",
    "phone": "+1 (821) 508-3483",
    "address": "569 Vernon Avenue, Golconda, Nevada, 6460",
    "about": "Reprehenderit veniam id ut et. Laborum velit elit ea fugiat consectetur culpa. Laboris nulla velit tempor voluptate do culpa anim eu consequat minim laboris in.\r\n",
    "registered": "2015-07-20T07:09:23 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df3161fde123c880adb63",
    "index": 11,
    "guid": "c5e80bf9-d892-4939-b0cf-88f49e74a6b3",
    "isActive": true,
    "balance": "$2,500.60",
    "picture": "http://placehold.it/200",
    "age": 38,
    "eyeColor": "brown",
    "name": "Clemons Ortiz",
    "gender": "male",
    "company": "LUDAK",
    "email": "clemonsortiz@ludak.com",
    "phone": "+1 (881) 550-2959",
    "address": "210 Morton Street, Waverly, Arkansas, 4245",
    "about": "Cupidatat adipisicing nulla voluptate consequat pariatur ut laborum irure incididunt magna dolor. Excepteur labore occaecat ut eiusmod officia aliquip velit non voluptate ex consequat sint laborum officia. Ipsum deserunt voluptate occaecat ex in magna est velit sit culpa dolore cillum. Eiusmod eiusmod ad sit amet cillum tempor ut.\r\n",
    "registered": "2016-09-27T06:32:31 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df316ad48afd46bc8611a",
    "index": 12,
    "guid": "cbd94b01-20bb-4f99-a9d2-49298f21e7b8",
    "isActive": true,
    "balance": "$3,034.54",
    "picture": "http://placehold.it/200",
    "age": 20,
    "eyeColor": "green",
    "name": "Georgette Edwards",
    "gender": "female",
    "company": "DATAGENE",
    "email": "georgetteedwards@datagene.com",
    "phone": "+1 (815) 467-3875",
    "address": "571 Porter Avenue, Connerton, Maryland, 4067",
    "about": "Officia amet mollit cupidatat fugiat consectetur eiusmod dolore sint incididunt do ullamco esse qui. Officia deserunt aliquip qui reprehenderit sunt ut commodo. Ut nisi adipisicing magna ex deserunt occaecat deserunt esse. Velit pariatur consequat do laborum qui excepteur amet. Dolor ad fugiat minim dolore proident magna eiusmod. Velit ex quis sint cupidatat.\r\n",
    "registered": "2015-04-05T02:04:44 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df316491cd61287532c32",
    "index": 13,
    "guid": "311085c4-75ee-48e2-89b1-623717b60639",
    "isActive": false,
    "balance": "$3,737.09",
    "picture": "http://placehold.it/200",
    "age": 27,
    "eyeColor": "brown",
    "name": "Bethany Clarke",
    "gender": "female",
    "company": "IMANT",
    "email": "bethanyclarke@imant.com",
    "phone": "+1 (921) 521-3299",
    "address": "977 Columbia Street, Vandiver, California, 3764",
    "about": "Elit ea voluptate laboris officia aliquip est ut nostrud fugiat. Nostrud reprehenderit aliqua magna ad officia velit irure sint ad amet in. In irure adipisicing commodo id anim. Esse veniam proident laborum magna in commodo velit culpa ut duis culpa. Ut amet adipisicing est duis ad do anim qui ipsum minim do dolore. Nostrud aute ipsum amet aliqua cupidatat est.\r\n",
    "registered": "2014-10-16T08:53:38 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df316d373d869d748a5f9",
    "index": 14,
    "guid": "39c5125c-89ba-4727-9007-58a059197e6b",
    "isActive": false,
    "balance": "$3,307.18",
    "picture": "http://placehold.it/200",
    "age": 29,
    "eyeColor": "green",
    "name": "Valerie Ramsey",
    "gender": "female",
    "company": "UNCORP",
    "email": "valerieramsey@uncorp.com",
    "phone": "+1 (888) 458-2866",
    "address": "268 Jerome Street, Bendon, Illinois, 5462",
    "about": "Tempor dolor proident cillum tempor aliquip occaecat nisi. Veniam enim quis eu Lorem ut Lorem aliquip sit occaecat. Ad voluptate excepteur adipisicing aliqua elit officia esse irure mollit ex laborum adipisicing commodo. Adipisicing sunt minim exercitation nisi adipisicing anim ad adipisicing dolore.\r\n",
    "registered": "2016-05-29T10:36:08 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df316b09c30e249855657",
    "index": 15,
    "guid": "e53f5783-286f-4f72-aa77-2a72963855af",
    "isActive": false,
    "balance": "$3,982.24",
    "picture": "http://placehold.it/200",
    "age": 33,
    "eyeColor": "blue",
    "name": "Burch Solis",
    "gender": "male",
    "company": "AQUAMATE",
    "email": "burchsolis@aquamate.com",
    "phone": "+1 (828) 576-3545",
    "address": "961 Holt Court, Graball, Iowa, 5735",
    "about": "Esse ea deserunt cupidatat dolor commodo laboris occaecat adipisicing aliqua do. Exercitation duis culpa ad laborum mollit dolore ex. Culpa incididunt reprehenderit nisi ex velit voluptate pariatur. Id mollit eu nisi consectetur fugiat ad fugiat excepteur. Ex pariatur quis nulla aliquip magna consequat nulla qui ipsum. Elit labore duis sunt cupidatat et fugiat. Sunt aliquip anim anim ea excepteur mollit Lorem.\r\n",
    "registered": "2015-05-15T11:51:30 -03:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  },
  {
    "_id": "589df3166692a17d607435de",
    "index": 16,
    "guid": "e84abe8d-d29b-431e-85cf-b7646099f169",
    "isActive": true,
    "balance": "$1,979.85",
    "picture": "http://placehold.it/200",
    "age": 23,
    "eyeColor": "green",
    "name": "Mitzi Wall",
    "gender": "female",
    "company": "BULLZONE",
    "email": "mitziwall@bullzone.com",
    "phone": "+1 (917) 535-3929",
    "address": "748 Maple Avenue, Dunbar, Pennsylvania, 5019",
    "about": "Ipsum minim adipisicing id exercitation. Do nulla elit mollit in nostrud. Laboris exercitation nostrud mollit velit labore. Labore officia laborum anim tempor minim aliqua adipisicing. Ea aute elit consequat quis et. Veniam ex deserunt sint ea eu occaecat ad velit sint.\r\n",
    "registered": "2014-03-10T04:32:51 -02:00",
    "reviews" : [{
      "stars": 5,
      "body": "I love this member!",
      "author": "joe@thomas.com",
      "createdOn": 1397490980837
    }, {
      "stars": 3,
      "body": "This member has problem at work.",
      "author": "tim@hater.com",
      "createdOn": 1397490980837
    }]
  }
];
})();