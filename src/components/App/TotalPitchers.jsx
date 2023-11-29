function TotalPitchers() {
  const [currentPitcher, setCurrentPitcher] = useState("Maud Nelson");

  const [pitcherList, setPitcherList] = useState([
    "Maud Nelson",
    "Ila Borders",
    "Don Newcombe",
    "CC Sabathia",
  ]);
  const [newPitcher, setNewPitcher] = useState("");
  // const pitcherList = useSelector((store) => store.pitcherList)
  const dispatch = useDispatch();
  const handlePitcherNameChange = (event) => {
    setNewPitcher(event.target.value);
  };

  // add new pitcher to the array. this will move to the pitcher reducer!
  const handlePitcherSubmit = (event) => {
    event.preventDefault();
    // spread: give me everything in pitcherList, then add this new thing
    setPitcherList([...pitcherList, newPitcher]);
    setNewPitcher("");
    dispatch({
      type: "ADD_PITCHER",
      payload: newPitcher,
    });
  };
  return (
    <>
      <h3>All Pitchers</h3>
      <form onSubmit={handlePitcherSubmit}>
        <input
          type="text"
          value={newPitcher}
          onChange={handlePitcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form>
      <ul>
        {pitcherList.map((pitcher) => (
          <li onClick={() => setCurrentPitcher(pitcher)}>{pitcher}</li>
        ))}
      </ul>
    </>
  );
}

export default TotalPitchers;
