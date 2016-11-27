## Preview


### size xs

```
<div>
  some text for the baseline
  <Select
    name='select-xs'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'}
    ]}
    size='xs'/>
  {' '}
  <Select
    disabled={true}
    name='select-xs-d'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'}
    ]}
    size='xs'/>
</div>
```


### size s

```
<div>
  some text for the baseline
  <Select
    defaultValue='kawasaki'
    name='select-s'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'}
    ]}
    size='s'/>
  {' '}
  <Select
    defaultValue='kawasaki'
    disabled={true}
    name='select-s-d'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'}
    ]}
    size='s'/>
</div>
```


### size m

```
<div>
  some text for the baseline
  <Select
    name='select-m'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'}
    ]}
    size='m'/>
  {' '}
  <Select
    disabled={true}
    name='select-m-d'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'}
    ]}
    size='m'/>
</div>
```


### searchable

```
<div>
  some text for the baseline
  <Select
    name='select-sa'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'}
    ]}
    searchable={true}
    size='m'/>
  {' '}
  <Select
    disabled={true}
    name='select-sa-d'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'}
    ]}
    searchable={true}
    size='m'/>
</div>
```


### big collection

```
<Select
  hasFixedWidth={true}
  name='select-bc'
  options={[
    {label: 'Abakan', value: 'abakan'},
    {label: 'Achinsk', value: 'achinsk'},
    {label: 'Aleksin', value: 'aleksin'},
    {label: 'Alexandrov', value: 'alexandrov'},
    {label: 'Almetyevsk', value: 'almetyevsk'},
    {label: 'Anapa', value: 'anapa'},
    {label: 'Angarsk', value: 'angarsk'},
    {label: 'Anzhero-Sudzhensk', value: 'anzhero-sudzhensk'},
    {label: 'Apatity', value: 'apatity'},
    {label: 'Arkhangelsk', value: 'arkhangelsk'},
    {label: 'Armavir', value: 'armavir'},
    {label: 'Arsenyev', value: 'arsenyev'},
    {label: 'Artyom', value: 'artyom'},
    {label: 'Arzamas', value: 'arzamas'},
    {label: 'Asbest', value: 'asbest'},
    {label: 'Astrakhan', value: 'astrakhan'},
    {label: 'Azov', value: 'azov'},
    {label: 'Balakhna', value: 'balakhna'},
    {label: 'Balakovo', value: 'balakovo'},
    {label: 'Balashikha', value: 'balashikha'},
    {label: 'Balashov', value: 'balashov'},
    {label: 'Barnaul', value: 'barnaul'},
    {label: 'Bataysk', value: 'bataysk'},
    {label: 'Belebey', value: 'belebey'},
    {label: 'Belgorod', value: 'belgorod'},
    {label: 'Belogorsk', value: 'belogorsk'},
    {label: 'Belorechensk', value: 'belorechensk'},
    {label: 'Beloretsk', value: 'beloretsk'},
    {label: 'Belovo', value: 'belovo'},
    {label: 'Berdsk', value: 'berdsk'},
    {label: 'Berezniki', value: 'berezniki'},
    {label: 'Beryozovsky', value: 'beryozovsky'},
    {label: 'Birobidzhan', value: 'birobidzhan'},
    {label: 'Biysk', value: 'biysk'},
    {label: 'Blagoveshchensk', value: 'blagoveshchensk'},
    {label: 'Bor', value: 'bor'},
    {label: 'Borisoglebsk', value: 'borisoglebsk'},
    {label: 'Borovichi', value: 'borovichi'},
    {label: 'Bratsk', value: 'bratsk'},
    {label: 'Bryansk', value: 'bryansk'},
    {label: 'Budyonnovsk', value: 'budyonnovsk'},
    {label: 'Bugulma', value: 'bugulma'},
    {label: 'Buynaksk', value: 'buynaksk'},
    {label: 'Buzuluk', value: 'buzuluk'},
    {label: 'Chapayevsk', value: 'chapayevsk'},
    {label: 'Chaykovsky', value: 'chaykovsky'},
    {label: 'Cheboksary', value: 'cheboksary'},
    {label: 'Chekhov', value: 'chekhov'},
    {label: 'Chelyabinsk', value: 'chelyabinsk'},
    {label: 'Cheremkhovo', value: 'cheremkhovo'},
    {label: 'Cherepovets', value: 'cherepovets'},
    {label: 'Cherkessk', value: 'cherkessk'},
    {label: 'Chernogorsk', value: 'chernogorsk'},
    {label: 'Chistopol', value: 'chistopol'},
    {label: 'Chita', value: 'chita'},
    {label: 'Derbent', value: 'derbent'},
    {label: 'Dimitrovgrad', value: 'dimitrovgrad'},
    {label: 'Dmitrov', value: 'dmitrov'},
    {label: 'Dolgoprudny', value: 'dolgoprudny'},
    {label: 'Domodedovo', value: 'domodedovo'},
    {label: 'Donetsk', value: 'donetsk'},
    {label: 'Donskoy', value: 'donskoy'},
    {label: 'Dubna', value: 'dubna'},
    {label: 'Dzerzhinsk', value: 'dzerzhinsk'},
    {label: 'Elektrostal', value: 'elektrostal'},
    {label: 'Elista', value: 'elista'},
    {label: 'Engels', value: 'engels'},
    {label: 'Fryazino', value: 'fryazino'},
    {label: 'Gatchina', value: 'gatchina'},
    {label: 'Gelendzhik', value: 'gelendzhik'},
    {label: 'Georgiyevsk', value: 'georgiyevsk'},
    {label: 'Glazov', value: 'glazov'},
    {label: 'Gorno-Altaysk', value: 'gorno-altaysk'},
    {label: 'Grozny', value: 'grozny'},
    {label: 'Gubkin', value: 'gubkin'},
    {label: 'Gukovo', value: 'gukovo'},
    {label: 'Gus-Khrustalny', value: 'gus-khrustalny'},
    {label: 'Irkutsk', value: 'irkutsk'},
    {label: 'Ishim', value: 'ishim'},
    {label: 'Ishimbay', value: 'ishimbay'},
    {label: 'Iskitim', value: 'iskitim'},
    {label: 'Ivanovo', value: 'ivanovo'},
    {label: 'Ivanteyevka', value: 'ivanteyevka'},
    {label: 'Izberbash', value: 'izberbash'},
    {label: 'Izhevsk', value: 'izhevsk'},
    {label: 'Kaliningrad', value: 'kaliningrad'},
    {label: 'Kaluga', value: 'kaluga'},
    {label: 'Kamensk-Shakhtinsky', value: 'kamensk-shakhtinsky'},
    {label: 'Kamensk-Uralsky', value: 'kamensk-uralsky'},
    {label: 'Kamyshin', value: 'kamyshin'},
    {label: 'Kansk', value: 'kansk'},
    {label: 'Kaspiysk', value: 'kaspiysk'},
    {label: 'Kazan', value: 'kazan'},
    {label: 'Kemerovo', value: 'kemerovo'},
    {label: 'Khabarovsk', value: 'khabarovsk'},
    {label: 'Khanty-Mansiysk', value: 'khanty-mansiysk'},
    {label: 'Khasavyurt', value: 'khasavyurt'},
    {label: 'Khimki', value: 'khimki'},
    {label: 'Kineshma', value: 'kineshma'},
    {label: 'Kirishi', value: 'kirishi'},
    {label: 'Kirov', value: 'kirov'},
    {label: 'Kirovo-Chepetsk', value: 'kirovo-chepetsk'},
    {label: 'Kiselyovsk', value: 'kiselyovsk'},
    {label: 'Kislovodsk', value: 'kislovodsk'},
    {label: 'Klimovsk', value: 'klimovsk'},
    {label: 'Klin', value: 'klin'},
    {label: 'Klintsy', value: 'klintsy'},
    {label: 'Kogalym', value: 'kogalym'},
    {label: 'Kolomna', value: 'kolomna'},
    {label: 'Komsomolsk-on-Amur', value: 'komsomolsk-on-amur'},
    {label: 'Kopeysk', value: 'kopeysk'},
    {label: 'Korolyov', value: 'korolyov'},
    {label: 'Kostroma', value: 'kostroma'},
    {label: 'Kotlas', value: 'kotlas'},
    {label: 'Kovrov', value: 'kovrov'},
    {label: 'Krasnodar', value: 'krasnodar'},
    {label: 'Krasnogorsk', value: 'krasnogorsk'},
    {label: 'Krasnokamensk', value: 'krasnokamensk'},
    {label: 'Krasnokamsk', value: 'krasnokamsk'},
    {label: 'Krasnoturyinsk', value: 'krasnoturyinsk'},
    {label: 'Krasnoyarsk', value: 'krasnoyarsk'},
    {label: 'Kropotkin', value: 'kropotkin'},
    {label: 'Krymsk', value: 'krymsk'},
    {label: 'Kstovo', value: 'kstovo'},
    {label: 'Kumertau', value: 'kumertau'},
    {label: 'Kungur', value: 'kungur'},
    {label: 'Kurgan', value: 'kurgan'},
    {label: 'Kursk', value: 'kursk'},
    {label: 'Kuznetsk', value: 'kuznetsk'},
    {label: 'Kyzyl', value: 'kyzyl'},
    {label: 'Labinsk', value: 'labinsk'},
    {label: 'Leninogorsk', value: 'leninogorsk'},
    {label: 'Leninsk-Kuznetsky', value: 'leninsk-kuznetsky'},
    {label: 'Lesnoy', value: 'lesnoy'},
    {label: 'Lesosibirsk', value: 'lesosibirsk'},
    {label: 'Lipetsk', value: 'lipetsk'},
    {label: 'Liski', value: 'liski'},
    {label: 'Livny', value: 'livny'},
    {label: 'Lobnya', value: 'lobnya'},
    {label: 'Lysva', value: 'lysva'},
    {label: 'Lytkarino', value: 'lytkarino'},
    {label: 'Lyubertsy', value: 'lyubertsy'},
    {label: 'Magadan', value: 'magadan'},
    {label: 'Magnitogorsk', value: 'magnitogorsk'},
    {label: 'Makhachkala', value: 'makhachkala'},
    {label: 'Maykop', value: 'maykop'},
    {label: 'Meleuz', value: 'meleuz'},
    {label: 'Mezhdurechensk', value: 'mezhdurechensk'},
    {label: 'Miass', value: 'miass'},
    {label: 'Michurinsk', value: 'michurinsk'},
    {label: 'Mikhaylovka', value: 'mikhaylovka'},
    {label: 'Mikhaylovsk', value: 'mikhaylovsk'},
    {label: 'Mineralnye Vody', value: 'mineralnye vody'},
    {label: 'Minusinsk', value: 'minusinsk'},
    {label: 'Moscow', value: 'moscow'},
    {label: 'Murmansk', value: 'murmansk'},
    {label: 'Murom', value: 'murom'},
    {label: 'Mytishchi', value: 'mytishchi'},
    {label: 'Naberezhnye Chelny', value: 'naberezhnye chelny'},
    {label: 'Nakhodka', value: 'nakhodka'},
    {label: 'Nalchik', value: 'nalchik'},
    {label: 'Naro-Fominsk', value: 'naro-fominsk'},
    {label: 'Nazarovo', value: 'nazarovo'},
    {label: 'Nazran', value: 'nazran'},
    {label: 'Neftekamsk', value: 'neftekamsk'},
    {label: 'Nefteyugansk', value: 'nefteyugansk'},
    {label: 'Neryungri', value: 'neryungri'},
    {label: 'Nevinnomyssk', value: 'nevinnomyssk'},
    {label: 'Nizhnekamsk', value: 'nizhnekamsk'},
    {label: 'Nizhnevartovsk', value: 'nizhnevartovsk'},
    {label: 'Nizhny Novgorod', value: 'nizhny novgorod'},
    {label: 'Nizhny Tagil', value: 'nizhny tagil'},
    {label: 'Noginsk', value: 'noginsk'},
    {label: 'Norilsk', value: 'norilsk'},
    {label: 'Novoaltaysk', value: 'novoaltaysk'},
    {label: 'Novocheboksarsk', value: 'novocheboksarsk'},
    {label: 'Novocherkassk', value: 'novocherkassk'},
    {label: 'Novokuybyshevsk', value: 'novokuybyshevsk'},
    {label: 'Novokuznetsk', value: 'novokuznetsk'},
    {label: 'Novomoskovsk', value: 'novomoskovsk'},
    {label: 'Novorossiysk', value: 'novorossiysk'},
    {label: 'Novoshakhtinsk', value: 'novoshakhtinsk'},
    {label: 'Novosibirsk', value: 'novosibirsk'},
    {label: 'Novotroitsk', value: 'novotroitsk'},
    {label: 'Novouralsk', value: 'novouralsk'},
    {label: 'Novy Urengoy', value: 'novy urengoy'},
    {label: 'Noyabrsk', value: 'noyabrsk'},
    {label: 'Nyagan', value: 'nyagan'},
    {label: 'Obninsk', value: 'obninsk'},
    {label: 'Odintsovo', value: 'odintsovo'},
    {label: 'Oktyabrsky', value: 'oktyabrsky'},
    {label: 'Omsk', value: 'omsk'},
    {label: 'Orekhovo-Zuyevo', value: 'orekhovo-zuyevo'},
    {label: 'Orenburg', value: 'orenburg'},
    {label: 'Orsk', value: 'orsk'},
    {label: 'Oryol', value: 'oryol'},
    {label: 'Ozyorsk', value: 'ozyorsk'},
    {label: 'Pavlovo', value: 'pavlovo'},
    {label: 'Pavlovsky Posad', value: 'pavlovsky posad'},
    {label: 'Penza', value: 'penza'},
    {label: 'Perm', value: 'perm'},
    {label: 'Pervouralsk', value: 'pervouralsk'},
    {label: 'Petropavlovsk-Kamchatsky', value: 'petropavlovsk-kamchatsky'},
    {label: 'Petrozavodsk', value: 'petrozavodsk'},
    {label: 'Podolsk', value: 'podolsk'},
    {label: 'Polevskoy', value: 'polevskoy'},
    {label: 'Prokhladny', value: 'prokhladny'},
    {label: 'Prokopyevsk', value: 'prokopyevsk'},
    {label: 'Pskov', value: 'pskov'},
    {label: 'Pushkino', value: 'pushkino'},
    {label: 'Pyatigorsk', value: 'pyatigorsk'},
    {label: 'Ramenskoye', value: 'ramenskoye'},
    {label: 'Reutov', value: 'reutov'},
    {label: 'Revda', value: 'revda'},
    {label: 'Roslavl', value: 'roslavl'},
    {label: 'Rossosh', value: 'rossosh'},
    {label: 'Rostov-on-Don', value: 'rostov-on-don'},
    {label: 'Rubtsovsk', value: 'rubtsovsk'},
    {label: 'Ryazan', value: 'ryazan'},
    {label: 'Rybinsk', value: 'rybinsk'},
    {label: 'Rzhev', value: 'rzhev'},
    {label: 'Saint Petersburg', value: 'saint petersburg'},
    {label: 'Salavat', value: 'salavat'},
    {label: 'Salsk', value: 'salsk'},
    {label: 'Samara', value: 'samara'},
    {label: 'Saransk', value: 'saransk'},
    {label: 'Sarapul', value: 'sarapul'},
    {label: 'Saratov', value: 'saratov'},
    {label: 'Sarov', value: 'sarov'},
    {label: 'Sergiyev Posad', value: 'sergiyev posad'},
    {label: 'Serov', value: 'serov'},
    {label: 'Serpukhov', value: 'serpukhov'},
    {label: 'Severodvinsk', value: 'severodvinsk'},
    {label: 'Severomorsk', value: 'severomorsk'},
    {label: 'Seversk', value: 'seversk'},
    {label: 'Shadrinsk', value: 'shadrinsk'},
    {label: 'Shakhty', value: 'shakhty'},
    {label: 'Shchyokino', value: 'shchyokino'},
    {label: 'Shchyolkovo', value: 'shchyolkovo'},
    {label: 'Shuya', value: 'shuya'},
    {label: 'Sibay', value: 'sibay'},
    {label: 'Slavyansk-na-Kubani', value: 'slavyansk-na-kubani'},
    {label: 'Smolensk', value: 'smolensk'},
    {label: 'Sochi', value: 'sochi'},
    {label: 'Solikamsk', value: 'solikamsk'},
    {label: 'Solnechnogorsk', value: 'solnechnogorsk'},
    {label: 'Sosnovy Bor', value: 'sosnovy bor'},
    {label: 'Stary Oskol', value: 'stary oskol'},
    {label: 'Stavropol', value: 'stavropol'},
    {label: 'Sterlitamak', value: 'sterlitamak'},
    {label: 'Stupino', value: 'stupino'},
    {label: 'Surgut', value: 'surgut'},
    {label: 'Svobodny', value: 'svobodny'},
    {label: 'Syktyvkar', value: 'syktyvkar'},
    {label: 'Syzran', value: 'syzran'},
    {label: 'Taganrog', value: 'taganrog'},
    {label: 'Tambov', value: 'tambov'},
    {label: 'Tikhoretsk', value: 'tikhoretsk'},
    {label: 'Tikhvin', value: 'tikhvin'},
    {label: 'Timashyovsk', value: 'timashyovsk'},
    {label: 'Tobolsk', value: 'tobolsk'},
    {label: 'Tolyatti', value: 'tolyatti'},
    {label: 'Tomsk', value: 'tomsk'},
    {label: 'Troitsk', value: 'troitsk'},
    {label: 'Tuapse', value: 'tuapse'},
    {label: 'Tula', value: 'tula'},
    {label: 'Tuymazy', value: 'tuymazy'},
    {label: 'Tver', value: 'tver'},
    {label: 'Tyumen', value: 'tyumen'},
    {label: 'Ufa', value: 'ufa'},
    {label: 'Ukhta', value: 'ukhta'},
    {label: 'Ulan-Ude', value: 'ulan-ude'},
    {label: 'Ulyanovsk', value: 'ulyanovsk'},
    {label: 'Usolye-Sibirskoye', value: 'usolye-sibirskoye'},
    {label: 'Ussuriysk', value: 'ussuriysk'},
    {label: 'Ust-Ilimsk', value: 'ust-ilimsk'},
    {label: 'Uzlovaya', value: 'uzlovaya'},
    {label: 'Velikiye Luki', value: 'velikiye luki'},
    {label: 'Veliky Novgorod', value: 'veliky novgorod'},
    {label: 'Verkhnyaya Pyshma', value: 'verkhnyaya pyshma'},
    {label: 'Vidnoye', value: 'vidnoye'},
    {label: 'Vladikavkaz', value: 'vladikavkaz'},
    {label: 'Vladimir', value: 'vladimir'},
    {label: 'Vladivostok', value: 'vladivostok'},
    {label: 'Volgodonsk', value: 'volgodonsk'},
    {label: 'Volgograd', value: 'volgograd'},
    {label: 'Vologda', value: 'vologda'},
    {label: 'Volsk', value: 'volsk'},
    {label: 'Volzhsk', value: 'volzhsk'},
    {label: 'Volzhsky', value: 'volzhsky'},
    {label: 'Vorkuta', value: 'vorkuta'},
    {label: 'Voronezh', value: 'voronezh'},
    {label: 'Voskresensk', value: 'voskresensk'},
    {label: 'Votkinsk', value: 'votkinsk'},
    {label: 'Vsevolozhsk', value: 'vsevolozhsk'},
    {label: 'Vyazma', value: 'vyazma'},
    {label: 'Vyborg', value: 'vyborg'},
    {label: 'Vyksa', value: 'vyksa'},
    {label: 'Vyshny Volochyok', value: 'vyshny volochyok'},
    {label: 'Yakutsk', value: 'yakutsk'},
    {label: 'Yaroslavl', value: 'yaroslavl'},
    {label: 'Yegoryevsk', value: 'yegoryevsk'},
    {label: 'Yekaterinburg', value: 'yekaterinburg'},
    {label: 'Yelabuga', value: 'yelabuga'},
    {label: 'Yelets', value: 'yelets'},
    {label: 'Yessentuki', value: 'yessentuki'},
    {label: 'Yeysk', value: 'yeysk'},
    {label: 'Yoshkar-Ola', value: 'yoshkar-ola'},
    {label: 'Yurga', value: 'yurga'},
    {label: 'Yuzhno-Sakhalinsk', value: 'yuzhno-sakhalinsk'},
    {label: 'Zarechny', value: 'zarechny'},
    {label: 'Zelenodolsk', value: 'zelenodolsk'},
    {label: 'Zelenogorsk', value: 'zelenogorsk'},
    {label: 'Zheleznodorozhny', value: 'zheleznodorozhny'},
    {label: 'Zheleznogorsk', value: 'zheleznogorsk'},
    {label: 'Zhigulyovsk', value: 'zhigulyovsk'},
    {label: 'Zhukovsky', value: 'zhukovsky'},
    {label: 'Zlatoust', value: 'zlatoust'}
  ]}
  searchable={true}/>
```
