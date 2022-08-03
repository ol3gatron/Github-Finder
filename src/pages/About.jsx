function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
      App that uses GitHub API to find users and displays information about them like stats and repos.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Made By:
        <a className='text-white' href='https://github.com/ol3gatron' target="_blank" rel="noreferrer">
          Oleg Mustafin
        </a>
      </p>
    </div>
  )
}
export default About