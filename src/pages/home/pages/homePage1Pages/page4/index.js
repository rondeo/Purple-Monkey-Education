import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import { actionCreators } from './store'

class HomePage1Page4 extends PureComponent{
render(){
         return(
            <div>
                HomePage1  Page4
            </div>
        )
   
}
}
const mapDispatchToProps=(dispatch)=>{
            return {
                addClassBack(history){
                    // dispatch(actionCreators.addClassBack())
                }
            }
        }
const mapStateToProps=(state)=>{
    return {
        // tabBarPage:state.getIn(['home','tabBarPage']),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(HomePage1Page4));