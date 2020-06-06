import React from 'react';


class ProfileStatus extends React.Component {  
state ={
        editMode: false
    }
activateEditMode = () =>{
    debugger;
    this.setState({
        editMode: true
    })
    // this.forceUpdate();
}
deactivateEditMode = () =>{
    debugger;
    this.setState({
        editMode: false
    })
    // this.forceUpdate();
}
render(){
    return (
        <>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={ this.activateEditMode}>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} type="text" />
            </div>
            }
        </>

    )
}
    
}

export default ProfileStatus