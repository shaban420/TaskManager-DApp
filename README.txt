
# Task Manager DApp 

A blockchain-based task management system built with Solidity, Truffle, Ganache, and Web3.js.

## 📋 Description

This DApp allows users to:

* Add tasks to the blockchain
* View task details by ID
* Mark tasks as complete
* View all tasks with filtering (All/Pending/Completed)
* Track total task count

## 🛠 Prerequisites

* Node.js (v14+)
* Truffle (`npm install -g truffle`)
* Ganache (GUI or CLI: `npm install -g ganache`)
* MetaMask browser extension

## 📦 Installation & Setup

1. Clone repository:

```bash
git clone <your-repo-url>
cd task-manager-dapp
```

2. Install dependencies:

```bash
npm init -y
npm install web3
```

3. Start Ganache:

* GUI: Open → create workspace → note RPC URL
* CLI: `ganache-cli -p 7545`

4. Compile & Deploy Contract:

```bash
truffle compile
truffle migrate --reset
```

* Copy deployed contract address.

5. Configure Frontend:

* Replace `contractAddress` in `src/script.js` with your deployed address
* Update `contractABI` if contract changed

6. Run Frontend:

```bash
cd src
python -m http.server 8000   # or use http-server
```

* Open `http://localhost:8000`

## 🚀 Usage

* Connect MetaMask to Ganache network
* Add new tasks via UI
* View tasks by ID
* Complete tasks
* Filter and view all tasks

## 📁 Project Structure

```
task-manager-dapp/
├── contracts/        # Smart contract
├── migrations/       # Deployment scripts
├── src/              # Frontend (HTML/CSS/JS)
├── build/            # Compiled contracts
├── truffle-config.js
└── package.json
```

## 🎓 Smart Contract Functions

| Function       | Params           | Returns                   | Description        |
| -------------- | ---------------- | ------------------------- | ------------------ |
| add_task       | string _text     | -                         | Add new task       |
| complete_task  | uint256 _task_id | -                         | Mark task complete |
| get_task       | uint256 _task_id | string text, bool is_done | Get task details   |
| get_task_count | -                | uint256                   | Total tasks        |
| all_tasks      | uint256 index    | string text, bool is_done | Public array       |

**Events:** `task_added`, `task_completed`
**Struct:**

```solidity
struct task {
    string text;
    bool is_done;
}
```

## 🌟 Features

* Add & complete tasks on blockchain
* View task details and total count
* Filter tasks (All/Pending/Completed)
* Responsive UI with color-coded task cards

## 🔗 Resources

* [Truffle Docs](https://trufflesuite.com/docs/)
* [Web3.js Docs](https://web3js.readthedocs.io/)
* [Solidity Docs](https://docs.soliditylang.org/)
* [Ganache Docs](https://trufflesuite.com/docs/ganache/)
* [MetaMask Guide](https://metamask.io/faqs/)


If you want, I can also **make it even shorter and more sleek for GitHub** with minimal sections so it looks very professional for your repo. Do you want me to do that?
