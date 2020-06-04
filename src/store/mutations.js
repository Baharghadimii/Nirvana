export default {
  setInitialTime: (state, { name, time }) => {
    state.initialTimeZone.name = name;
    state.initialTimeZone.time = time;
  }
}