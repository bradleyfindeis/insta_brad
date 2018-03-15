import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getApps } from '../actions/apps'
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button } from 'semantic-ui-react'
import AppForm from './AppForm'


class Apps extends React.Component {
  
  state = { name: '', showForm: false }
  

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  apps = () => {
    const { apps } = this.props
    const { name } = this.state
    let visible = apps
    if (name)
      visible = apps.filter( a => a.name === name )

      return visible.map( app =>
        <Card key={app.id}>
          <Image src={app.image} />
          <Card.Content>
            <Card.Header>
              {app.name}
            </Card.Header>
            <Card.Description>
              {app.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/apps/${app.id}`}>
              View This Brad
            </Link>
          </Card.Content>
        </Card>
      )

  }

  nameOptions = () => {
    return this.props.names.map( (n,i) => { return { key: i, text: n, value: n } })
  }

  render() {
    const { name, showForm } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Brads</Header>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showForm ?
          <AppForm closeForm={this.toggleForm} />
          :
          <div>
            <Dropdown
              placeholder="Filter by Name"
              fluid
              selection
              options={this.nameOptions()}
              onChange={ (e, data) => this.setState({ name: data.value }) }
              value={name}
            />
            { name && <Button fluid basic onClick={ () => this.setState({ name: '' }) }>Clear Filter: {name}</Button> }
            <Divider />
            <Card.Group itemsPerRow={4}>
              { this.apps() }
            </Card.Group>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { apps } = state
  const names = [...new Set(apps.map( a => a.name ))]
  return { apps, names}
}

export default connect(mapStateToProps)(Apps);