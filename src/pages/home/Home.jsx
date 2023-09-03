import useTheme from '../../hooks/useTheme'

const Home = () => {
  const { currentTheme } = useTheme()
  return (
    <div>
      <div>Home</div>
      <button style={{ backgroundColor: currentTheme.button.primary }}>
        START
      </button>
    </div>
  )
}

export default Home
