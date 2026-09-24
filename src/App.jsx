const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return <p>
    Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
}

const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.code} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      {
        name: 'CSIT321 - Applications Development',
        exercises: 3
      },
      {
        name: 'CSIT327 - Information Management 2',
        exercises: 3
      },
      {
        name: 'IT365 - Data Analytics 1',
        exercises: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      <Footer name = "Jedrek Niño B. Delica" code = "CSIT340" section = "G5"/>
    </div>
  )
}

export default App