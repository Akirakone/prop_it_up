import react, {Component} from 'react'; 

class classprop extends Component{
    render(){
        const{firstname,lastname,age,haircolor}=this.props;
        this.state={age:this.props.age}
        
        increaseage=()=>{this.setState({age:this.state.age+1})
    }
        return (
        <div>
            <h1> {lastname},{firstname}</h1>
            <p>Age:{age}</p>
            <p>HairColor:{haircolor}</p>
        </div>  
        );
    }
}

export default classprop;