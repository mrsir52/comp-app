import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import Mutateplayer from '../Mutations/Mutateplayer'
import { Card, CardBody, Input, Button} from 'mdbreact'
import ListPlayers from '../queries/ListPlayers'
import "../Profile/style.css"
import uuidV4 from 'uuid'


class Createplayer extends Component {

    state = {
        firstName: '',
        lastName: '',
        position: '',
        maxBench: '',
        maxSquat: '',
        gradClass: ''
    }


    onAdd = () => {
        this.props.mutate({
            variables: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                position: this.state.position,
                gradClass: this.state.gradClass,
                maxBench: this.state.maxBench,
                maxSquat: this.state.maxSquat,
                id: uuidV4
            }
        })

    }

    render() {


        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-lg-3">
                        <Card>
                            <a href="/Teamdata">
                                <h2>Team Data</h2>
                            </a>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </Card>
                    </div>
                    <br/>
                    <div className="col-lg-3">
                        <Card>
                            <a href="/Createplayer">
                                <h2>Create Player</h2>
                            </a>
                            <a href="/Updateplayer">
                                <h2>Update Player</h2>
                            </a>
                            <a href="/Deleteplayer">
                                <h2>Delete Player</h2>
                            </a>

                        </Card>
                    </div>
                    <br/>
                    <div className="col-lg-3">
                        <Card>
                            <h2>Graduating Class Data</h2>
                            <br/>
                            <br/>
                            <br/>
                        </Card>
                    </div>
                    <div className="col-lg-3">
                        <Card>
                            <h2>Workouts</h2>
                            <br/>
                            <br/>
                            <br/>
                        </Card>
                    </div>
                </div>
                <section className="">
                    <div className="row">

                        <div className="col-lg-3"></div>
                        <div className="col-lg-5">
                            <br/>
                            <form onSubmit={ async e => {
                                e.preventDefault()
                                const response = await this.props.mutate({
                                    variables: {
                                        firstName: this.state.firstName,
                                        lastName: this.state.lastName,
                                        position: this.state.position,
                                        gradClass: this.state.gradClass,
                                        maxBench: this.state.maxBench,
                                        maxSquat: this.state.maxSquat,
                                        id: uuidV4()
                                    },
                                    refetchQueries: [{ query: ListPlayers }]
                                }).then( () => window.location.replace('/Teamdata'))

                                // alert('Player Created')
                                // window.location.replace('/Teamdata')
                            }}>
                                <h1>Create Player</h1>
                                <Card>

                                    <CardBody>
                                        <Input
                                            type="text"
                                            name="firstName"
                                            label="First Name"
                                            value={this.state.firstName}
                                            onChange={e => this.setState({firstName: e.target.value})}
                                        />
                                        <Input
                                            type="text"
                                            name="lastName"
                                            label="Last Name"
                                            value={this.state.lastName}
                                            onChange={e => this.setState({lastName: e.target.value})}
                                        />
                                        <Input
                                            type="text"
                                            name="position"
                                            label="Position"
                                            value={this.state.position}
                                            onChange={e => this.setState({position: e.target.value})}
                                        />
                                        <Input
                                            type="text"
                                            name="gradClass"
                                            label="Class Of"
                                            value={this.state.gradClass}
                                            onChange={e => this.setState({gradClass: e.target.value})}
                                        />
                                        <Input
                                            type="number"
                                            name="maxBench"
                                            label="Max Bench"
                                            value={this.state.maxBench}
                                            onChange={e => this.setState({maxBench: e.target.value})}
                                        />
                                        <Input
                                            type="number"
                                            name="maxSquat"
                                            label="Max Squat"
                                            value={this.state.maxSquat}
                                            onChange={e => this.setState({maxSquat: e.target.value})}
                                        />

                                        <button color='primary' type="submit">Add</button>
                                    </CardBody>
                                </Card>
                            </form>


                        </div>

                    </div>

                </section>
            </div>
        )

    }

}

export default graphql(Mutateplayer)(Createplayer)