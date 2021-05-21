export interface ITestUIProps {}

const TestUI = ({}: ITestUIProps) => {
  return (
    <div>
      Hello, This is TestUI component. Updated with this text.
      <span>This is so cool!</span>
      <div
        style={{
          height: '400px',
          width: '200px',
          padding: '20px',
          background: '#ff0000',
        }}
      ></div>
    </div>
  )
}

export default TestUI
