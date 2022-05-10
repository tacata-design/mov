export const TextFeature = ({ blok }) => {
  const { textOne, textTwo } = blok
  return (
    <div style={{ margin: '0 auto', textAlign: 'center', maxWidth: '800px' }}>
      <p style={{ fontSize: '48px', fontWeight: '700', letterSpacing: '2px' }}>
        {textOne}
      </p>
      <p style={{ fontSize: '19px', fontWeight: '200', letterSpacing: '1px' }}>
        {textTwo}
      </p>
    </div>
  )
}
