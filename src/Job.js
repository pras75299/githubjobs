import React, { useState } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function Job({ job }) {
  const [open, setOpen] = useState(false)

  return (
    <Card className="bg-purple-50 border-indigo-50 mb-4 shadow-md">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title className="text-indigo-800">
              {job.title} - <span className="text-indigo-900 font-weight-light">{job.company}</span>
            </Card.Title>
            <Card.Subtitle className="text-indigo-800 my-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <div className="mb-2">
              <Badge className="bg-indigo-200 mr-2">{job.type}</Badge>
              <Badge className="bg-indigo-200">{job.location}</Badge> 
            </div>
            <div className="max-w-screen-md" style={{ wordBreak: 'break-all' }}>
              <ReactMarkdown source={job.how_to_apply} />
            </div>
          </div>
          <img className="w-28 companylogoimg" height="50" alt={job.company} src={job.company_logo} />
        </div>
        <Card.Text>
          <Button
            onClick={() => setOpen(prevOpen => !prevOpen)}
            className="bg-indigo-700 text-white border-indigo-700 mt-2 hover:bg-indigo-700 active:bg-indigo-700 focus:bg-indigo-700"
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}