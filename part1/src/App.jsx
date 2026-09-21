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
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return <p>
    Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'

  const part1 = {
    name: 'Intro to ReactJS',
    exercises: 3
  }

  const part2 = {
    name: 'Anatomy of ReactJS',
    exercises: 3
  }

  const part3 = {
    name: 'Basic JavaScript Coding',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />

      <Content 
        part1={part1.name}
        exercises1={part1.exercises}

        part2={part2.name}
        exercises2={part2.exercises}

        part3={part3.name}
        exercises3={part3.exercises} 
      />

      <Total
      exercises1={part1.exercises}
      exercises2={part2.exercises}
      exercises3={part3.exercises}
      />

    </div>
  )
}

export default App