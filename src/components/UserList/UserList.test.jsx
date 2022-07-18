import { render } from "@testing-library/react";
import UserList from "./UserList";

describe('User List component', () => { 
    it('should create empty user list',() =>{
        const component = render(<UserList users={[]}/>);
        expect(component).toMatchSnapshot();
    })
 })