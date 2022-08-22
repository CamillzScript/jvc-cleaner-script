class Data
{
  setData(name, value) {
    localStorage.setItem(name, value);
  }

  getData(name) {
    localStorage.getItem(name);
  }

  clearData(name) {
    localStorage.removeItem(name);
  }

  clearAll() {
    localStorage.clear();
  }
}

export default Data;
