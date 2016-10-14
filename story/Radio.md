### Theme `common`

```
<div className='columns'>
  <div className='column'>
    size `s` <Radio
      name='es'
      options={[
        {label: 'Yamaha', value: 'yamaha'},
        {label: 'Suzuki', value: 'suzuki'},
        {label: 'Kawasaki', value: 'kawasaki'},
        {label: 'Vespa', value: 'vespa'},
        {label: 'MZ', value: 'mz'},
      ]}
      size='s'
      theme='common'/>

    <hr className='delimiter'/>

    size `m` <Radio
      defaultValue='vespa'
      name='em'
      options={[
        {label: 'Yamaha', value: 'yamaha'},
        {label: 'Suzuki', value: 'suzuki'},
        {label: 'Kawasaki', value: 'kawasaki'},
        {label: 'Vespa', value: 'vespa'},
        {label: 'MZ', value: 'mz'},
      ]}
      size='m'
      theme='common'/>
  </div>
  <div className='column'>
    <Radio
      disabled={true}
      name='ds'
      options={[
        {label: 'Yamaha', value: 'yamaha'},
        {label: 'Suzuki', value: 'suzuki'},
        {label: 'Kawasaki', value: 'kawasaki'},
        {label: 'Vespa', value: 'vespa'},
        {label: 'MZ', value: 'mz'},
      ]}
      size='s'
      theme='common'/>

    <hr className='delimiter'/>

    <Radio
      defaultValue='vespa'
      disabled={true}
      name='dm'
      options={[
        {label: 'Yamaha', value: 'yamaha'},
        {label: 'Suzuki', value: 'suzuki'},
        {label: 'Kawasaki', value: 'kawasaki'},
        {label: 'Vespa', value: 'vespa'},
        {label: 'MZ', value: 'mz'},
      ]}
      size='m'
      theme='common'/>
  </div>
</div>
```


### Theme `button`

```
<div>
  size `xs` <Radio
    name='e-xs'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'},
    ]}
    size='xs'
    theme='button'/>

  <hr className='delimiter'/>

  <Radio
    disabled={true}
    name='d-xs'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'},
    ]}
    size='xs'
    theme='button'/>

  <hr className='delimiter'/>

  size `s` <Radio
    defaultValue='mz'
    name='e-s'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'},
    ]}
    size='s'
    theme='button'/>

  <hr className='delimiter'/>

  <Radio
    defaultValue='mz'
    disabled={true}
    name='d-s'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'},
    ]}
    size='s'
    theme='button'/>

  <hr className='delimiter'/>

  size `m` <Radio
    name='e-m'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'},
    ]}
    size='m'
    theme='button'/>

  <hr className='delimiter'/>

  <Radio
    disabled={true}
    name='d-m'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'},
    ]}
    size='m'
    theme='button'/>

  <hr className='delimiter'/>

  size `l` <Radio
    name='e-l'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'},
    ]}
    size='l'
    theme='button'/>

  <hr className='delimiter'/>

  <Radio
    disabled={true}
    name='d-l'
    options={[
      {label: 'Yamaha', value: 'yamaha'},
      {label: 'Suzuki', value: 'suzuki'},
      {label: 'Kawasaki', value: 'kawasaki'},
      {label: 'Vespa', value: 'vespa'},
      {label: 'MZ', value: 'mz'},
    ]}
    size='l'
    theme='button'/>
</div>
```
