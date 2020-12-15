import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Job.js';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <>
      <header className="bg-indigo-700 text-white text-center py-3">
        <h1 className="text-2xl font-bold">GitHub Jobs</h1>
      </header>
      <Container className="mb-4">        
        <SearchForm params={params} onParamChange={handleParamChange} />
        {loading && <h1 className="text-center font-bold my-3 text-2xl">Loading...</h1>}
        {error && <h1>Error. Try Refreshing.</h1>}
        {jobs.map(job => {
          return <Job key={job.id} job={job} />
        })}
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </Container>
    </>
    
  )
}

export default App;