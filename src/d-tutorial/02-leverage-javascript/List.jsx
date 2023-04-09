import { people } from '../../data'
import Person from './People'

const List = () => {
  return (
    <div>
      {people.map(person => {
        return <Person key={person.id} {...person} />
      })}
    </div>
  )
}
export default List
