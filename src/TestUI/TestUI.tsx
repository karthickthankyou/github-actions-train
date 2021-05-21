export interface ITestUIProps {}

const TestUI = ({}: ITestUIProps) => {
  return (
    <div>
      Hello, This is TestUI component. Updated with this text.
      <span>This is so cool!</span>
      <div
        style={{
          height: '200px',
          width: '200px',
          padding: '20px',
          background: '#ffff00',
        }}
      >
        Hello World
      </div>
    </div>
  )
}

export default TestUI
