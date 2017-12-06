## Preview


### select

```
<div>
  <SelectMultiple
    hasFixedWidth={true}
    name='select-og'
    options={[
      {label: 'Ducati', value: 'ducati'},
      {label: 'Honda', value: 'honda'},
      {label: 'Jawa', value: 'jawa'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Ural', value: 'ural'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'Yamaha', value: 'yamaha'},
    ]}
    placeholder='Select...' />
</div>
```

### select searchable

```
<div>
  <SelectMultiple
    hasFixedWidth={true}
    name='select-og'
    options={[
      {label: 'Ducati', value: 'ducati'},
      {label: 'Honda', value: 'honda'},
      {label: 'Jawa', value: 'jawa'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Ural', value: 'ural'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'Yamaha', value: 'yamaha'},
    ]}
    placeholder='Select...'
    searchable={true}/>
</div>
```

### select searchable with option groups

```
<div>
  <SelectMultiple
    hasFixedWidth={true}
    name='select-og'
    options={[
      {label: 'Motorcycle', type: 'option-group'},
      {label: 'Ducati', value: 'ducati'},
      {label: 'Honda', value: 'honda'},
      {label: 'Jawa', value: 'jawa'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Ural', value: 'ural'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Towns', type: 'option-group'},
      {label: 'Abakan', value: 'abakan'},
      {label: 'Achinsk', value: 'achinsk'},
      {label: 'Aleksin', value: 'aleksin'},
      {label: 'Alexandrov', value: 'alexandrov'},
      {label: 'Almetyevsk', value: 'almetyevsk'},
    ]}
    placeholder='Select...'
    searchable={true}/>
</div>
```
