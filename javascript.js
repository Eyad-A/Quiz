const types = {
  name1: {
    compact: 'compact',
    mid: 'mid',
    small: 'small',
    med: 'med',
    big: 'big'
  },
  name2: {
    city: 'city',
    mountain: 'mountain'
  },
  name3: {
    gas: 'gas',
    performance: 'performance'
  },
  name4: {
    save: 'save',
    luxury: 'luxury'
  }
};

const cars = [
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/toyota/prius">Toyota Prius</a></p><p>The Toyota Prius is a full hybrid electric automobile developed by Toyota and manufactured by the company since 1997. Initially offered as a 4-door sedan, it has been produced only as a 5-door hatchback since 2003. The United States Environmental Protection Agency and California Air Resources Board (CARB) rate the Prius as among the cleanest vehicles sold in the United States based on smog-forming emissions. The 2016 model year Prius Eco ranks as the all-time most fuel efficient gasoline-powered car available in the US without plug-in capability.</p><p>Prius liftback is the world&#39;s top selling hybrid car with almost 4 million units sold. In 2011, Toyota expanded the Prius family to include the Prius v, an extended hatchback wagon, and the Prius c, a subcompact hatchback. The production version of the Prius plug-in hybrid was released in 2012. The second generation of the plug-in variant, the Prius Prime, was released in the U.S. in November 2016. The Prime achieved the highest miles per gallon equivalent (MPGe) rating in all-electric mode of any vehicle rated by EPA with an internal combustion engine. The Prius family totaled global cumulative sales of 6.1 million units in January 2017, representing 61% of the 10 million hybrids sold worldwide by Toyota since 1997. Different variations of the Prius will have different MPGs, but the 2017 Prius is estimated to have 58 city/53 highway MPG.</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Toyota_Prius_%28IV%29_%E2%80%93_Frontansicht%2C_19._September_2015%2C_Frankfurt.jpg/1920px-Toyota_Prius_%28IV%29_%E2%80%93_Frontansicht%2C_19._September_2015%2C_Frankfurt.jpg" class="img-responsive"></p><p class="credit">By <a href="https://de.wikipedia.org/wiki/Benutzer:M_93" class="extiw" title="de:Benutzer:M 93">M 93</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/de/deed.en" title="Creative Commons Attribution-Share Alike 3.0 de">CC BY-SA 3.0 de</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=43648012">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Toyota_Prius">Source</a></p>',
    requirements: {
      name1: types.name1.compact,
      name2: types.name2.city,
      name3: types.name3.gas,
      name4: types.name4.save,      
    }    
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/lexus/ct-hybrid">Lexus CT 200H</a></p><p>The Lexus CT 200h is a hybrid electric automobile introduced by Lexus as a premium sport compact hatchback. It made its debut at the March 2010 Geneva Auto Show, six months after the unveiling of the LF-Ch concept car; it is primarily targeted at the European market but is being sold worldwide and was introduced to North American markets at the April 2010 New York International Auto Show. The CT200h boasts 43 city/40 highway MPG.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/LEXUS_CT200h_Japan_2011_front.JPG/1920px-LEXUS_CT200h_Japan_2011_front.JPG"></p><p class="credit">Image by <a href="//commons.wikimedia.org/w/index.php?title=User:Kirakiraouji&amp;action=edit&amp;redlink=1" class="new" title="User:Kirakiraouji (page does not exist)">Kirakiraouji</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=26140160">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Lexus_CT">Source</a></p>',
    requirements: {
      name1: types.name1.compact,
      name2: types.name2.city,
      name3: types.name3.gas,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/honda/civic">Honda Civic SI</a></p><p>The Honda Civic Si is a sport compact trim of Civic by Honda. The Si (Sport Injected) trim was introduced for the third generation of Honda Civics in both Japan and North America. The Civic Si has been positioned as more of a full-featured sport trim, featuring luxury options such as a sunroof and a seven speaker audio system.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2015_Honda_Civic_Si_Coupe_Orange.JPG/1920px-2015_Honda_Civic_Si_Coupe_Orange.JPG"></p><p class="credit">Image by <a href="//commons.wikimedia.org/w/index.php?title=User:Alvintrusty&amp;action=edit&amp;redlink=1" class="new" title="User:Alvintrusty (page does not exist)">Alvintrusty</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=41344405">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Honda_Civic_Si">Source</a></p>',
    requirements: {
      name1: types.name1.compact,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/bmw/3-series">BMW 328</a></p><p>The BMW 3 Series is an entry-level luxury car manufactured by the German automaker BMW since 1975. The first generation of the 3 Series was only available as a 2-door sedan, however the model range has since expanded to include a 4-door sedan, 2-door convertible, 2-door coupé, 5-door station wagon and 5-door hatchback body styles. The 3 Series is BMW&#39;s best-selling model, accounting for around 30% of the BMW brands annual total sales. The BMW 3 Series has won numerous awards throughout its history.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2012_BMW_320d_%28F30_MY13%29_Luxury_Line_sedan_%282015-07-24%29_01.jpg/1920px-2012_BMW_320d_%28F30_MY13%29_Luxury_Line_sedan_%282015-07-24%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:OSX" title="User:OSX">OSX</a> - <span class="int-own-work" lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=45096518">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_3_Series">Source</a></p>',
    requirements: {
      name1: types.name1.compact,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/mini/cooper-paceman">MINI Cooper Paceman ALL4</a></p><p>The Mini Paceman is a subcompact, three door crossover SUV based on the crossover Mini Countryman, and built by Mini. The car was introduced as a concept car first at the 2011 North American International Auto Show. Production of the concept was confirmed in August 2011, with the production model unveiled in September 2012. Like the Countryman, the Paceman is offered with a choice of two or four wheel drive (known as ALL4), and with 1.6 L petrol or diesel and 2.0 L diesel Inline-four engines in various states of tune.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mini_Cooper_SD_Paceman_All4.jpg/1920px-Mini_Cooper_SD_Paceman_All4.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:Thomas_doerfer" title="User:Thomas doerfer">Thomas doerfer</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=35445700">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Mini_Paceman">Source</a></p>',
    requirements: {
      name1: types.name1.compact,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/bmw/3-series">BMW 328 XI</a></p><p>The BMW 3 Series is an entry-level luxury car manufactured by the German automaker BMW since 1975. The first generation of the 3 Series was only available as a 2-door sedan, however the model range has since expanded to include a 4-door sedan, 2-door convertible, 2-door coupé, 5-door station wagon and 5-door hatchback body styles. The 3 Series is BMW&#39;s best-selling model, accounting for around 30% of the BMW brands annual total sales. The BMW 3 Series has won numerous awards throughout its history.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2012_BMW_320d_%28F30_MY13%29_Luxury_Line_sedan_%282015-07-24%29_01.jpg/1920px-2012_BMW_320d_%28F30_MY13%29_Luxury_Line_sedan_%282015-07-24%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:OSX" title="User:OSX">OSX</a> - <span class="int-own-work" lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=45096518">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_3_Series">Source</a></p>',
    requirements: {
      name1: types.name1.compact,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" href="https://cars.usnews.com/cars-trucks/bmw/3-series">BMW 328 XI</a></p><p>The BMW 3 Series is an entry-level luxury car manufactured by the German automaker BMW since 1975. The first generation of the 3 Series was only available as a 2-door sedan, however the model range has since expanded to include a 4-door sedan, 2-door convertible, 2-door coupé, 5-door station wagon and 5-door hatchback body styles. The 3 Series is BMW&#39;s best-selling model, accounting for around 30% of the BMW brands annual total sales. The BMW 3 Series has won numerous awards throughout its history.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2012_BMW_320d_%28F30_MY13%29_Luxury_Line_sedan_%282015-07-24%29_01.jpg/1920px-2012_BMW_320d_%28F30_MY13%29_Luxury_Line_sedan_%282015-07-24%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:OSX" title="User:OSX">OSX</a> - <span class="int-own-work" lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=45096518">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_3_Series">Source</a></p>',
    requirements: {
      name1: types.name1.compact,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/subaru/impreza">Subaru Impreza</a></p><p>The Subaru Impreza is a compact family car that has been manufactured since 1992 by Subaru. Mainstream versions have received naturally aspirated "boxer" flat-four engines ranging from 1.5- to 2.5-liters, with the performance-oriented Impreza WRX and WRX STI models uprated with the addition of turbochargers. Since the third generation series, some markets have adopted the abbreviated Subaru WRX name for these high-performance variants. Subaru has offered both front- and all-wheel drive layouts for the Impreza. Some markets have restricted sales to the all-wheel drive model—therefore granting the Impreza a unique selling proposition in the global compact class characterized by front-wheel drive. The 2017 Impreza has a starting MSRP of $18,395.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/2013_Subaru_Impreza_%28GP7_MY13%29_2.0i_hatchback_%282015-06-15%29_01.jpg/1920px-2013_Subaru_Impreza_%28GP7_MY13%29_2.0i_hatchback_%282015-06-15%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:OSX" title="User:OSX">OSX</a> - <span class="int-own-work" lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=41190048">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Subaru_Impreza">Source</a></p>',
    requirements: {
      name1: types.name1.compact,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },
  
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/honda/accord-hybrid">Honda Accord Hybrid</a></p><p>The Honda Accord is a series of automobiles manufactured by Honda since 1976, best known for its four-door sedan variant, which has been one of the best-selling cars in the United States since 1989. The Accord has achieved considerable success, especially in the United States, where it was the best-selling Japanese car for fifteen years (1982–97), topping its class in sales in 1991 and 2001, with around ten million vehicles sold. Numerous road tests, past and present, rate the Accord as one of the world&#39;s most reliable vehicles. The Accord has been on the Car and Driver 10Best list a record 30 times. The 2017 Accord Hybrid has a starting MSRP of $29,605.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2014_Honda_Accord_2.4_i-VTEC_sedan_%282016-01-07%29_01.jpg/1920px-2014_Honda_Accord_2.4_i-VTEC_sedan_%282016-01-07%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:EurovisionNim" title="User:EurovisionNim">EurovisionNim</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=46186672">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Honda_Accord">Source</a></p>',
    requirements: {
      name1: types.name1.mid,
      name2: types.name2.city,
      name3: types.name3.gas,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/bmw/5-series">BMW 528</a></p><p>The BMW 5 Series is an executive car manufactured by German automaker BMW since 1972. It is the successor to the 4-door sedan models of the BMW New Class and is currently in its seventh generation. It is BMW&#39;s second best-selling model after the 3-Series and in 2010 produced about 50% of the BMW&#39;s profits.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/BMW_523d_Luxury_%28G30%29_by_Japan_specification.jpg/1920px-BMW_523d_Luxury_%28G30%29_by_Japan_specification.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:%E6%A0%B9%E5%B7%9D%E5%AD%9D%E5%A4%AA%E9%83%8E" title="User:根川孝太郎">根川孝太郎</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=57539882">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_5_Series">Source</a></p>',
    requirements: {
      name1: types.name1.mid,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/volkswagen/cc">Volkswagen CC</a></p><p>The Volkswagen CC is a four-door sedan version of the Volkswagen Passat with a "stylized sweeping roofline" reducing rear headroom and cargo space. According to Volkswagen, the suffix CC stands for Comfort Coupé despite it not being a coupé due to having four doors. The CC falls between the Passat and the Phaeton in VW&#39;s range — while based on the Passat, and sharing its wheelbase, the CC is 27 mm (1.06 inches) longer, 50 mm (1.97 inches) lower, and 36 mm (1.42 inches) wider than the Passat making it more executive-oriented.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Volkswagen_Passat_CC_2.0_TSi_2010_%2814168908053%29.jpg/1920px-Volkswagen_Passat_CC_2.0_TSi_2010_%2814168908053%29.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:%E6%A0%B9%E5%B7%9D%E5%AD%9D%E5%A4%AA%E9%83%8E" title="User:根川孝太郎">根川孝太郎</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=57539882">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_5_Series">Source</a></p>',
    requirements: {
      name1: types.name1.mid,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/subaru/legacy">Subaru Legacy</a></p><p>The Subaru Legacy is a mid-size car built by Japanese automobile manufacturer Subaru since 1989. Part of the original design goals for the Legacy model was to provide Subaru a vehicle in which they could compete in the lucrative North American midsize market against competitors Honda Accord, Toyota Camry, Mazda6, and Nissan Altima. Higher performance variants of the Legacy are offered as competitive alternatives to compact executive cars such as the Audi A4 and BMW 3 Series. The Legacy also serves as Subaru&#39;s flagship car. It is unique in its class for offering all wheel drive as a standard feature, and Subaru&#39;s traditional boxer engine.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/2015_Subaru_Liberty_%28MY15%29_2.5i_Premium_sedan_%282015-06-03%29_01.jpg/1920px-2015_Subaru_Liberty_%28MY15%29_2.5i_Premium_sedan_%282015-06-03%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:OSX" title="User:OSX">OSX</a> - <span class="int-own-work" lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=40742348">Link</a> <a target="_blank" href="https://cars.usnews.com/cars-trucks/subaru/legacy">Source</a></p>',
    requirements: {
      name1: types.name1.mid,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/bmw/5-series">BMW 528 XI</a></p><p>The BMW 5 Series is an executive car manufactured by German automaker BMW since 1972. It is the successor to the 4-door sedan models of the BMW New Class and is currently in its seventh generation. It is BMW&#39;s second best-selling model after the 3-Series and in 2010 produced about 50% of the BMW&#39;s profits.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/BMW_523d_Luxury_%28G30%29_by_Japan_specification.jpg/1920px-BMW_523d_Luxury_%28G30%29_by_Japan_specification.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:%E6%A0%B9%E5%B7%9D%E5%AD%9D%E5%A4%AA%E9%83%8E" title="User:根川孝太郎">根川孝太郎</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=57539882">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_5_Series">Source</a></p>',
    requirements: {
      name1: types.name1.mid,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/dodge/charger">Dodge Charger AWD</a></p><p>The Dodge Charger is four-door automobile introduced in February 2005. Built by Dodge, the car was created to continue the Dodge Charger line, and replaced the Dodge Intrepid as Dodge&#39;s full-size sedan. The new 3.6L Pentastar V6 Engine replaces the 2.7L V6 Engine as well as the 3.5L High-Output V6 Engine. Engines are available with both the 5-speed and 8-speed automatic transmissions. In 2015, the 8-spd autos are standard on the retail cars. The Charger Pursuit retains it Severe Duty A580 5-spd.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/4/48/Dodge_Charger_SXT_Plus_2014_%28100th_Anniversary%29.jpg"></p><p class="credit">By <a href="//commons.wikimedia.org/w/index.php?title=User:FireHouseRock&amp;action=edit&amp;redlink=1" class="new" title="User:FireHouseRock (page does not exist)">FireHouseRock</a> - I took this photo of my own vehicle on February 15, 2014., <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=31187827">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Dodge_Charger">Source</a></p>',
    requirements: {
      name1: types.name1.mid,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/lexus/is">Lexus IS 350 AWD</a></p><p>The IS 350 is a 4 door sport midsize car made by Lexus. Available in both rear wheel or all-wheel-drive, the IS 350 offers a nice balance of power, handling, and refinement. The F-Sport model adds front spoiler, side spoiler, rear spoiler, sport muffler and rear diffuser, diamond-like carbon shock absorber, 19-inch aluminium wheel set, member brace, and performance damper.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/2014_IS350_FSport.jpg/1920px-2014_IS350_FSport.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/w/index.php?title=User:Aneekr&amp;action=edit&amp;redlink=1" class="new" title="User:Aneekr (page does not exist)">Aneekr</a> - Taken at 2013 Chicago Auto Show, <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=25689103">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Lexus_IS">Source</a></p>',
    requirements: {
      name1: types.name1.mid,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },
  
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/toyota/rav4-hybrid">Rav4 Hybrid</a></p><p>The Toyota RAV4 is a compact crossover SUV produced by the Japanese automobile manufacturer Toyota. The vehicle was designed for consumers wanting a vehicle that had most of the benefits of SUVs, such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with the maneuverability and fuel economy of a compact car. Although not all RAV4s are four-wheel drive, RAV4 stands for "Recreational Active Vehicle with 4-wheel drive" because the aforementioned equipment is an option in select countries. The full hybrid system combines a 2.5-litre Atkinson cycle petrol engine with a powerful electric motor, a 204 cell nickel–metal hydride battery located under the rear seats, a power control unit, and a power split device. The hybrid model offers 34 city/30 highway mpg while the non hybrid model offers 23/30.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Toyota_Rav4_2016.jpg/1920px-Toyota_Rav4_2016.jpg"></p><p class="credit">Image by <a rel="nofollow" class="external text" href="https://www.flickr.com/people/37691369@N08">RL GNZLZ</a> from Chile - <a rel="nofollow" class="external text" href="https://www.flickr.com/photos/juanelo242a/29729446022/">Toyota Rav4 2016</a>, <a href="http://creativecommons.org/licenses/by-sa/2.0" title="Creative Commons Attribution-Share Alike 2.0">CC BY-SA 2.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=55343737">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Toyota_RAV4">Source</a></p>',
    requirements: {
      name1: types.name1.small,
      name2: types.name2.city,
      name3: types.name3.gas,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/buick/encore">Buick Encore</a></p><p>The Encore is Buick&#39;s first subcompact crossover SUV, and is available in front or all wheel drive. The only powertrain offered currently is a 1.4 litre turbo gasoline engine, coupled to a six speed automatic gearbox. The Encore boasts a 27 city/33 highway MPG</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2013_Buick_Encore%2C_dk_red%2C_front_left.jpg/1920px-2013_Buick_Encore%2C_dk_red%2C_front_left.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:Mr.choppers" title="User:Mr.choppers">Mr.choppers</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=31527066">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Opel_Mokka#Buick_Encore">Source</a></p>',
    requirements: {
      name1: types.name1.small,
      name2: types.name2.city,
      name3: types.name3.gas,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/mazda/cx-5">Mazda CX-5</a></p><p>The Mazda CX-5 is a compact crossover produced by Mazda starting in 2012 for the 2013 model year lineup. It is Mazda&#39;s first car featuring the new KODO – Soul of Motion Design language first shown in the Shinari concept vehicle in May 2011. It shares a platform with Mazda3 and Mazda6. It is also the first vehicle featuring the company&#39;s full Skyactiv Technology suite, including a rigid, lightweight platform, combined with a new series of efficient engines and transmissions resulting in reduced emissions and fuel consumption. 2017 Mazda CX-5 start at $24,045 MSRP</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Mazda_CX5.JPG/1920px-Mazda_CX5.JPG"></p><p class="credit">Image by <a href="//commons.wikimedia.org/w/index.php?title=User:Airhead&amp;action=edit&amp;redlink=1" class="new" title="User:Airhead (page does not exist)">Airhead</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18015934">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Mazda_CX-5">Source</a></p>',
    requirements: {
      name1: types.name1.small,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/bmw/x3">BMW X3</a></p><p>The BMW X3 is a compact luxury crossover SUV manufactured by German automaker BMW since 2003. Based on the BMW 3 Series platform, and now in its second generation, BMW markets the crossover as a Sports Activity Vehicle, the company&#39;s proprietary descriptor for its X-line of vehicles.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/2011_BMW_X3_%28F25%29_xDrive28i_wagon_%282011-11-18%29_01.jpg/1920px-2011_BMW_X3_%28F25%29_xDrive28i_wagon_%282011-11-18%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:OSX" title="User:OSX">OSX</a> - <span class="int-own-work" lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=17835740">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_X3">Source</a></p>',
    requirements: {
      name1: types.name1.small,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/toyota/rav4-hybrid">Rav4 Hybrid AWD</a></p><p>The Toyota RAV4 is a compact crossover SUV produced by the Japanese automobile manufacturer Toyota. The vehicle was designed for consumers wanting a vehicle that had most of the benefits of SUVs, such as increased cargo room, higher visibility, and the option of full-time four-wheel drive, along with the maneuverability and fuel economy of a compact car. Although not all RAV4s are four-wheel drive, RAV4 stands for "Recreational Active Vehicle with 4-wheel drive" because the aforementioned equipment is an option in select countries. The full hybrid system combines a 2.5-litre Atkinson cycle petrol engine with a powerful electric motor, a 204 cell nickel–metal hydride battery located under the rear seats, a power control unit, and a power split device. The hybrid model offers 34 city/30 highway mpg while the non hybrid model offers 23/30.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Toyota_Rav4_2016.jpg/1920px-Toyota_Rav4_2016.jpg"></p><p class="credit">Image by <a rel="nofollow" class="external text" href="https://www.flickr.com/people/37691369@N08">RL GNZLZ</a> from Chile - <a rel="nofollow" class="external text" href="https://www.flickr.com/photos/juanelo242a/29729446022/">Toyota Rav4 2016</a>, <a href="http://creativecommons.org/licenses/by-sa/2.0" title="Creative Commons Attribution-Share Alike 2.0">CC BY-SA 2.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=55343737">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Toyota_RAV4">Source</a></p>',
    requirements: {
      name1: types.name1.small,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/buick/encore">Buick Encore AWD</a></p><p>The Encore is Buick&#39;s first subcompact crossover SUV, and is available in front or all wheel drive. The only powertrain offered currently is a 1.4 litre turbo gasoline engine, coupled to a six speed automatic gearbox. The Encore AWD boasts a 24 city/30 highway MPG</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2013_Buick_Encore%2C_dk_red%2C_front_left.jpg/1920px-2013_Buick_Encore%2C_dk_red%2C_front_left.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:Mr.choppers" title="User:Mr.choppers">Mr.choppers</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=31527066">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Opel_Mokka#Buick_Encore">Source</a></p>',
    requirements: {
      name1: types.name1.small,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/mazda/cx-5">Mazda CX-5 AWD</a></p><p>The Mazda CX-5 is a compact crossover produced by Mazda starting in 2012 for the 2013 model year lineup. It is Mazda&#39;s first car featuring the new KODO – Soul of Motion Design language first shown in the Shinari concept vehicle in May 2011. It shares a platform with Mazda3 and Mazda6. It is also the first vehicle featuring the company&#39;s full Skyactiv Technology suite, including a rigid, lightweight platform, combined with a new series of efficient engines and transmissions resulting in reduced emissions and fuel consumption. 2017 Mazda CX-5 AWD start at $30,695 MSRP</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Mazda_CX5.JPG/1920px-Mazda_CX5.JPG"></p><p class="credit">Image by <a href="//commons.wikimedia.org/w/index.php?title=User:Airhead&amp;action=edit&amp;redlink=1" class="new" title="User:Airhead (page does not exist)">Airhead</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18015934">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Mazda_CX-5">Source</a></p>',
    requirements: {
      name1: types.name1.small,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/bmw/x3">BMW X3 xDrive</a></p><p>The BMW X3 is a compact luxury crossover SUV manufactured by German automaker BMW since 2003. Based on the BMW 3 Series platform, and now in its second generation, BMW markets the crossover as a Sports Activity Vehicle, the company&#39;s proprietary descriptor for its X-line of vehicles.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/2011_BMW_X3_%28F25%29_xDrive28i_wagon_%282011-11-18%29_01.jpg/1920px-2011_BMW_X3_%28F25%29_xDrive28i_wagon_%282011-11-18%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:OSX" title="User:OSX">OSX</a> - <span class="int-own-work" lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=17835740">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_X3">Source</a></p>',
    requirements: {
      name1: types.name1.small,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },
  
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/toyota/highlander-hybrid">Toyota Highlander Hybrid</a></p><p>The Toyota Highlander is a midsize crossover SUV produced by Toyota. It is built on the same chassis as used on the Toyota Camry. Announced in April of 2000 at the New York Auto Show and arriving in January of 2001 in North America, the Highlander became one of the first car-based mid-size SUV or mid-size crossovers. The Highlander is the crossover counterpart to the more rugged, truck-based midsize 4Runner and became Toyota&#39;s best-selling SUV before being surpassed by the smaller RAV4 in 2006. The 2017 highlander hybrid boasts 30 city/28 highway MPG.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2014_Toyota_Kluger_%28GSU55R%29_GXL_wagon_%282017-01-30%29_01.jpg/1920px-2014_Toyota_Kluger_%28GSU55R%29_GXL_wagon_%282017-01-30%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:EurovisionNim" title="User:EurovisionNim">EurovisionNim</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=55644329">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Toyota_Highlander">Source</a></p>',
    requirements: {
      name1: types.name1.med,
      name2: types.name2.city,
      name3: types.name3.gas,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/lexus/rx-hybrid">Lexus RX 450h</a></p><p>The RX 450h is a mid-size luxury crossover SUV sold by Lexus, the luxury division of Toyota. The Lexus RX 400h/RX 450h is the top selling Lexus hybrid, with global sales of 335,000 units through March 2016, out of one million Lexus hybrids sold worldwide. The RX 450h boats 31 city/28 highway MPG.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lexus_RX_450h_F_Sport_%28IV%29_%E2%80%93_Frontansicht%2C_14._Februar_2016%2C_D%C3%BCsseldorf.jpg/1920px-Lexus_RX_450h_F_Sport_%28IV%29_%E2%80%93_Frontansicht%2C_14._Februar_2016%2C_D%C3%BCsseldorf.jpg"></p><p class="credit">Image by <a href="https://de.wikipedia.org/wiki/Benutzer:M_93" class="extiw" title="de:Benutzer:M 93">M 93</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/de/deed.en" title="Creative Commons Attribution-Share Alike 3.0 de">CC BY-SA 3.0 de</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=46968061">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Lexus_RX">Source</a></p>',
    requirements: {
      name1: types.name1.med,
      name2: types.name2.city,
      name3: types.name3.gas,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/jeep/grand-cherokee">Jeep Grand Cherokee</a></p><p>The Jeep Grand Cherokee is a mid-size  SUV produced by the American manufacturer Jeep. Engine choices include the all new 3.6 L Pentastar V6 and 5.7 L Hemi V8. The V8 comes with the multi-speed automatic transmission that includes Electronic Range Selection (ERS) to manually limit the high gear operating range. Also, the new Grand Cherokee SRT8, which started production on July 16, 2011, is equipped with a 470 hp 6.4 L Hemi V8 engine.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Jeep_Grand_Cherokee_3.0_CRD_Overland_%28WK%29_%E2%80%93_Frontansicht%2C_31._M%C3%A4rz_2012%2C_D%C3%BCsseldorf.jpg/1920px-Jeep_Grand_Cherokee_3.0_CRD_Overland_%28WK%29_%E2%80%93_Frontansicht%2C_31._M%C3%A4rz_2012%2C_D%C3%BCsseldorf.jpg"></p><p class="credit">Source: <a href="https://en.wikipedia.org/wiki/Jeep_Grand_Cherokee" target="_blank">Wikipedia</a></p><p class="credit">Image by <a href="https://de.wikipedia.org/wiki/Benutzer:M_93" class="extiw" title="de:Benutzer:M 93">M 93</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/de/deed.en" title="Creative Commons Attribution-Share Alike 3.0 de">CC BY-SA 3.0 de</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18917300">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Jeep_Grand_Cherokee">Source</a></p>',
    requirements: {
      name1: types.name1.med,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/bmw/x5">BMW X5</a></p><p>The BMW X5 is a mid-size luxury crossover SUV produced by BMW. BMW branded the X5 as a Sport Activity Vehicle (SAV) rather than an SUV, to emphasize its on-road ability despite its size. The X5 shares its underpinnings with the BMW 5 Series performance luxury sedan.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2014_BMW_X5_%28F15%29_sDrive25d_wagon_%282016-04-07%29_02.jpg/1920px-2014_BMW_X5_%28F15%29_sDrive25d_wagon_%282016-04-07%29_02.jpg"></p><p class="credit">Source: <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_X5">Wikipedia</a></p><p>Image by <a href="//commons.wikimedia.org/wiki/User:EurovisionNim" title="User:EurovisionNim">EurovisionNim</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=48036081">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_X5">Source</a></p>',
    requirements: {
      name1: types.name1.med,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/toyota/highlander-hybrid">Toyota Highlander Hybrid AWD</a></p><p>The Toyota Highlander is a midsize crossover SUV produced by Toyota. It is built on the same chassis as used on the Toyota Camry. Announced in April of 2000 at the New York Auto Show and arriving in January of 2001 in North America, the Highlander became one of the first car-based mid-size SUV or mid-size crossovers. The Highlander is the crossover counterpart to the more rugged, truck-based midsize 4Runner and became Toyota&#39;s best-selling SUV before being surpassed by the smaller RAV4 in 2006. The 2017 highlander hybrid AWD boasts 27 city/28 highway MPG.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2014_Toyota_Kluger_%28GSU55R%29_GXL_wagon_%282017-01-30%29_01.jpg/1920px-2014_Toyota_Kluger_%28GSU55R%29_GXL_wagon_%282017-01-30%29_01.jpg"></p><p class="credit">Image by <a href="//commons.wikimedia.org/wiki/User:EurovisionNim" title="User:EurovisionNim">EurovisionNim</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=55644329">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Toyota_Highlander">Source</a></p>',
    requirements: {
      name1: types.name1.med,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/lexus/rx-hybrid">Lexus RX 450h AWD</a></p><p>The RX 450h is a mid-size luxury crossover SUV sold by Lexus, the luxury division of Toyota. The Lexus RX 400h/RX 450h is the top selling Lexus hybrid, with global sales of 335,000 units through March 2016, out of one million Lexus hybrids sold worldwide. The RX 450h AWD boats 31 city/28 highway MPG.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lexus_RX_450h_F_Sport_%28IV%29_%E2%80%93_Frontansicht%2C_14._Februar_2016%2C_D%C3%BCsseldorf.jpg/1920px-Lexus_RX_450h_F_Sport_%28IV%29_%E2%80%93_Frontansicht%2C_14._Februar_2016%2C_D%C3%BCsseldorf.jpg"></p><p class="credit">Image by <a href="https://de.wikipedia.org/wiki/Benutzer:M_93" class="extiw" title="de:Benutzer:M 93">M 93</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/de/deed.en" title="Creative Commons Attribution-Share Alike 3.0 de">CC BY-SA 3.0 de</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=46968061">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Lexus_RX">Source</a></p>',
    requirements: {
      name1: types.name1.med,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/jeep/grand-cherokee">Jeep Grand Cherokee 4WD</a></p><p>The Jeep Grand Cherokee is a mid-size  SUV produced by the American manufacturer Jeep. Engine choices include the all new 3.6 L Pentastar V6 and 5.7 L Hemi V8. The V8 comes with the multi-speed automatic transmission that includes Electronic Range Selection (ERS) to manually limit the high gear operating range. Also, the new Grand Cherokee SRT8, which started production on July 16, 2011, is equipped with a 470 hp 6.4 L Hemi V8 engine.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Jeep_Grand_Cherokee_3.0_CRD_Overland_%28WK%29_%E2%80%93_Frontansicht%2C_31._M%C3%A4rz_2012%2C_D%C3%BCsseldorf.jpg/1920px-Jeep_Grand_Cherokee_3.0_CRD_Overland_%28WK%29_%E2%80%93_Frontansicht%2C_31._M%C3%A4rz_2012%2C_D%C3%BCsseldorf.jpg"></p><p class="credit">Source: <a href="https://en.wikipedia.org/wiki/Jeep_Grand_Cherokee" target="_blank">Wikipedia</a></p><p class="credit">Image by <a href="https://de.wikipedia.org/wiki/Benutzer:M_93" class="extiw" title="de:Benutzer:M 93">M 93</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/de/deed.en" title="Creative Commons Attribution-Share Alike 3.0 de">CC BY-SA 3.0 de</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=18917300">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Jeep_Grand_Cherokee">Source</a></p>',
    requirements: {
      name1: types.name1.med,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },  
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/bmw/x5">BMW X5 xDrive</a></p><p>The BMW X5 is a mid-size luxury crossover SUV produced by BMW. BMW branded the X5 as a Sport Activity Vehicle (SAV) rather than an SUV, to emphasize its on-road ability despite its size. The X5 shares its underpinnings with the BMW 5 Series performance luxury sedan. It comes in an sDrive configuration which is 2WD, or you can spend a little extra to get the xDrive which is AWD.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2014_BMW_X5_%28F15%29_sDrive25d_wagon_%282016-04-07%29_02.jpg/1920px-2014_BMW_X5_%28F15%29_sDrive25d_wagon_%282016-04-07%29_02.jpg"></p><p class="credit">Source: <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_X5">Wikipedia</a></p><p>Image by <a href="//commons.wikimedia.org/wiki/User:EurovisionNim" title="User:EurovisionNim">EurovisionNim</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="http://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=48036081">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/BMW_X5">Source</a></p>',
    requirements: {
      name1: types.name1.med,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },
  
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/chevrolet/tahoe">Chevy Tahoe</a></p><p>The Chevrolet Tahoe (and its rebadged version GMC Yukon) is a full-size SUV from General Motors. The Insurance Institute for Highway Safety has praised the Tahoe as one of the best of its class. The Chevrolet Tahoe and GMC Yukon currently serve as a part of General Motors&#39; full-size SUV family. Lengthened wheelbase models are available for both as the Suburban for Chevrolet and Yukon XL for GMC. A luxury Denali model joined the Yukon lineup in 1998. The Cadillac Escalade is closely related to the Denali models of the Yukon. As of February 2014, the 2014 Tahoe was the top-ranked Affordable Large SUV in U.S. News & World Report&#39;s rankings. 2017 Chevy Tahoe boasts 16 city/23 highway mpg, one of the best in its class. The Chevy Tahoe MSRP starts at $47,215</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/%2716_Chevrolet_Tahoe_%28Carrefour_Angrignon%29.jpg/1280px-%2716_Chevrolet_Tahoe_%28Carrefour_Angrignon%29.jpg"></p><p class="credit">Image by <a href="https://en.wikipedia.org/wiki/User:Bull-Doser" class="extiw" title="en:User:Bull-Doser">Bull-Doser</a> - <span class="int-own-work" lang="en">Own work</span>., Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=51438714">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Chevrolet_Tahoe">Source</a></p>',
    requirements: {
      name1: types.name1.big,
      name2: types.name2.city,
      name3: types.name3.gas,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/infiniti/qx80">Audi QX80</a></p><p>The Infiniti QX80 (called the Infiniti QX56 until 2014) is a full-size luxury SUV built by Nissan Motor Company Infiniti division. The naming convention originally adhered to the current trend of using a numeric designation derived from the engine&#39;s displacement, thus QX56 since the car has a 5.6-liter engine. From the 2014 model year, the car was renamed the QX80, as part of Infiniti&#39;s model name rebranding. The new name carries no meaning beyond suggesting that the vehicle is larger than smaller models such as the QX60. The QX80 boasts 14 city/20 highway MPG and carries starting price tag of $63,850 MSRP.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Infiniti_QX80.jpg/1280px-Infiniti_QX80.jpg"></p><p class="credit">Image by <a href="https://en.wikipedia.org/wiki/User:Bull-Doser" class="extiw" title="en:User:Bull-Doser">Bull-Doser</a> - <span class="int-own-work" lang="en">Own work</span>., Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=46018153">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Infiniti_QX80">Source</a></p>',
    requirements: {
      name1: types.name1.big,
      name2: types.name2.city,
      name3: types.name3.gas,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/nissan/armada">Nissan Armada</a></p><p>The Nissan Armada is Nissan&#39;s full-size SUV. It shares its body-on-frame F-Alpha platform with the Nissan Titan pickup truck, Nissan Xterra SUV, Nissan Frontier pickup truck, and Nissan Pathfinder SUV. The 2017 Armada features a 5.6 liter V8 engine with 390 horsepower. The Armada starts at $44,900 MSRP.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/4/45/Nissan-Armada-2.jpg"></p><p class="credit">Image by IFCAR - <span class="int-own-work" lang="en" xml:lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=1046758">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Nissan_Armada">Source</a></p>',
    requirements: {
      name1: types.name1.big,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/cadillac/escalade">Cadillac Escalade</a></p><p>The Cadillac Escalade is a full-size luxury SUV engineered and manufactured by Cadillac. It was Cadillac&#39;s first major entry into the popular SUV market. The Escalade ESV (based on the Chevrolet Suburban) and its former sibling the Escalade EXT (based on the Avalanche sport utility truck) were made before the 2007 redesign. The Escalade ESV version is available in the United States, Canada, Mexico, and the Middle East. It is Cadillac&#39;s largest luxury oriented, passenger and load carrying vehicle which was previously served by the Cadillac Commercial Chassis.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/2014_Washington_Auto_Show_%2812141232626%29.jpg/1920px-2014_Washington_Auto_Show_%2812141232626%29.jpg"></p><p class="credit">Image by <a rel="nofollow" class="external text" href="https://www.flickr.com/people/7546038@N03">BrianBoardman</a> from Alexandria VA - <a rel="nofollow" class="external text" href="https://www.flickr.com/photos/7546038@N03/12141232626/">2014 Washington Auto Show</a>, <a href="http://creativecommons.org/licenses/by/2.0" title="Creative Commons Attribution 2.0">CC BY 2.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=34023566">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Cadillac_Escalade">Source</a></p>',
    requirements: {
      name1: types.name1.big,
      name2: types.name2.city,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/chevrolet/tahoe">Chevy Tahoe 4WD</a></p><p>The Chevrolet Tahoe (and its rebadged version GMC Yukon) is a full-size SUV from General Motors. The Insurance Institute for Highway Safety has praised the Tahoe as one of the best of its class. The Chevrolet Tahoe and GMC Yukon currently serve as a part of General Motors&#39; full-size SUV family. Lengthened wheelbase models are available for both as the Suburban for Chevrolet and Yukon XL for GMC. A luxury Denali model joined the Yukon lineup in 1998. The Cadillac Escalade is closely related to the Denali models of the Yukon. As of February 2014, the 2014 Tahoe was the top-ranked Affordable Large SUV in U.S. News & World Report&#39;s rankings. 2017 Chevy Tahoe AWD boasts 16 city/22 highway mpg, one of the best in its class. The Chevy Tahoe AWD MSRP starts at $50,215</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/%2716_Chevrolet_Tahoe_%28Carrefour_Angrignon%29.jpg/1280px-%2716_Chevrolet_Tahoe_%28Carrefour_Angrignon%29.jpg"></p><p class="credit">Image by <a href="https://en.wikipedia.org/wiki/User:Bull-Doser" class="extiw" title="en:User:Bull-Doser">Bull-Doser</a> - <span class="int-own-work" lang="en">Own work</span>., Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=51438714">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Chevrolet_Tahoe">Source</a></p>',
    requirements: {
      name1: types.name1.big,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/infiniti/qx80">Infiniti QX80 4WD</a></p><p>The Infiniti QX80 (called the Infiniti QX56 until 2014) is a full-size luxury SUV built by Nissan Motor Company Infiniti division. The naming convention originally adhered to the current trend of using a numeric designation derived from the engine&#39;s displacement, thus QX56 since the car has a 5.6-liter engine. From the 2014 model year, the car was renamed the QX80, as part of Infiniti&#39;s model name rebranding. The new name carries no meaning beyond suggesting that the vehicle is larger than smaller models such as the QX60. The QX80 AWD boasts 14 city/19 highway MPG and carries starting price tag of $66,950 MSRP.</p><p><img class="img-responsive"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Infiniti_QX80.jpg/1280px-Infiniti_QX80.jpg"></p><p class="credit">Image by <a href="https://en.wikipedia.org/wiki/User:Bull-Doser" class="extiw" title="en:User:Bull-Doser">Bull-Doser</a> - <span class="int-own-work" lang="en">Own work</span>., Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=46018153">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Infiniti_QX80">Source</a></p>',
    requirements: {
      name1: types.name1.big,
      name2: types.name2.mountain,
      name3: types.name3.gas,
      name4: types.name4.luxury
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" href="https://cars.usnews.com/cars-trucks/nissan/armada">Nissan Armada 4WD</a></p><p>The Nissan Armada is Nissan&#39;s full-size SUV. It shares its body-on-frame F-Alpha platform with the Nissan Titan pickup truck, Nissan Xterra SUV, Nissan Frontier pickup truck, and Nissan Pathfinder SUV. The 2017 Armada features a 5.6 liter V8 engine with 390 horsepower. The Armada starts at $44,900 MSRP.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/4/45/Nissan-Armada-2.jpg"></p><p class="credit">Image by IFCAR - <span class="int-own-work" lang="en" xml:lang="en">Own work</span>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=1046758">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Nissan_Armada">Source</a></p>',
    requirements: {
      name1: types.name1.big,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.save
    }
  },
  {
    car: '<p><br><a class="headline" target="_blank" target="https://cars.usnews.com/cars-trucks/cadillac/escalade">Cadillac Escalade 4WD</a></p><p>The Cadillac Escalade is a full-size luxury SUV engineered and manufactured by Cadillac. It was Cadillac&#39;s first major entry into the popular SUV market. The Escalade ESV (based on the Chevrolet Suburban) and its former sibling the Escalade EXT (based on the Avalanche sport utility truck) were made before the 2007 redesign. The Escalade ESV version is available in the United States, Canada, Mexico, and the Middle East. It is Cadillac&#39;s largest luxury oriented, passenger and load carrying vehicle which was previously served by the Cadillac Commercial Chassis.</p><p><img class="img-responsive" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/2014_Washington_Auto_Show_%2812141232626%29.jpg/1920px-2014_Washington_Auto_Show_%2812141232626%29.jpg"></p><p class="credit">Image by <a rel="nofollow" class="external text" href="https://www.flickr.com/people/7546038@N03">BrianBoardman</a> from Alexandria VA - <a rel="nofollow" class="external text" href="https://www.flickr.com/photos/7546038@N03/12141232626/">2014 Washington Auto Show</a>, <a href="http://creativecommons.org/licenses/by/2.0" title="Creative Commons Attribution 2.0">CC BY 2.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=34023566">Link</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Cadillac_Escalade">Source</a></p>',
    requirements: {
      name1: types.name1.big,
      name2: types.name2.mountain,
      name3: types.name3.performance,
      name4: types.name4.luxury
    }
  },  
];





//question counter
var question = 1;
var maxQuestions = 4;

//event handler for click event
var nextButton = document.getElementById('next');
nextButton.onclick = function() {
  //validate
  var x = document.forms["form"]["name" + question].value;
  if (x == "") {
    alert("Please make a choice");
    return false;
  }  
  question++;
  console.log(question);
  if (question === maxQuestions) {    
    //hide the next button
    $(nextButton).addClass("hidden");
  }
  //hide the last question  
  $('#question' + (question - 1)).addClass("hidden");
  //show the current question  
  $('#question' + question).removeClass("hidden");  
  //show prev button
  $('#prev').removeClass("hidden");
  //show submit
  if (question === maxQuestions) {
  $('#submit').removeClass("hidden");
}
};

var prevButton = document.getElementById('prev');
prevButton.onclick = function() {
  question--;
  console.log(question);
  if (question === 1) {
    //hide the prev button
    $(prevButton).addClass("hidden");
  }
  if (question < maxQuestions) {
    $('#next').removeClass("hidden");
  }
  //hide current question
  $('#question' + (question + 1)).addClass("hidden");
  //show the last question
  $('#question' + question).removeClass("hidden");
  //hide submit button
  $('#submit').addClass("hidden");
};

var startOverButton = document.getElementById('startOver');
startOverButton.onclick = function() {
  question = 1;
  $('#prev').addClass("hidden");
  $('#next').removeClass("hidden");
  $('#startOver').addClass("hidden");
  $('#question' + question).removeClass("hidden");
  $('#question' + maxQuestions).addClass("hidden");
  suggestion.innerHTML = "";
  document.getElementById("form").reset();
};







const getElements = () => {
  const checkedValue = selector => (
  document.querySelector('input[name = "' + selector + '"]:checked').value
  );
  
  return {
    name1: checkedValue('name1'),
    name2: checkedValue('name2'),
    name3: checkedValue('name3'),
    name4: checkedValue('name4'),
    submit: document.getElementById("submit"),
    suggestion: document.getElementById("suggestion"),
    suggestion2: document.getElementById("suggestion2")
  };  
};

function submit(event) {
  event.preventDefault();
  
  //show start over button and hide the other buttons
  $('#prev').addClass("hidden");
  $('#submit').addClass("hidden");
  $('#question' + question).addClass("hidden");
  $('#startOver').removeClass("hidden");
  
  const {
    name1,
    name2,
    name3,
    name4,
    suggestion
  } = getElements();
  
  const result = cars.find(({
    requirements
  }) => (
  requirements.name1 === name1 &&
  requirements.name2 === name2 &&
  requirements.name3 === name3 &&
  requirements.name4 === name4
  ));
  
  suggestion.innerHTML = result.car;  
  
}

document.getElementById("form").addEventListener("submit", submit);
