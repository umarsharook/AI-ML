let balance = 100;
let selectedBets = new Set();
let betAmount = 10;

function toggleBet(button, type) {
  if (balance <= 0) {
    alert("No balance!");
    return;
  }

  if (selectedBets.has(type)) {
    selectedBets.delete(type);
    button.classList.remove("active");
  } else {
    selectedBets.add(type);
    button.classList.add("active");
  }
}

function rollDice() {
  // Check if the balance is sufficient before proceeding
  betAmount = parseInt(document.getElementById('betAmount').value) || 10;
  if (betAmount < 1) {
    alert("Bet amount must be at least ₹1.");
    return;
  }

  if (balance < betAmount) {
    alert("Insufficient balance.");
    return;
  }

  if (selectedBets.size === 0) {
    alert("Please select at least one bet.");
    return;
  }

  // Deduct the bet amount from the balance before rolling
  balance -= betAmount;

  const dice1Value = Math.ceil(Math.random() * 6);
  const dice2Value = Math.ceil(Math.random() * 6);
  const total = dice1Value + dice2Value;

  animateDice(dice1Value, dice2Value, () => {
    document.getElementById('result').textContent = `You rolled: ${total}`;

    let win = false;
    selectedBets.forEach(bet => {
      let payoutMultiplier = getPayoutMultiplier(bet);
      if (
        (bet === 'DOWN' && total >= 2 && total <= 6) ||
        (bet === 'UP' && total >= 8 && total <= 12) ||
        (bet === '7' && total === 7) ||
        (parseInt(bet) === total)
      ) {
        win = true;
        balance += betAmount * payoutMultiplier;  // Add winnings based on the multiplier
      }
    });

    if (win) {
      alert('YOU WIN');
    } else {
      alert('You lost!');
    }

    document.getElementById('balance').textContent = balance;

    // Clear selections
    selectedBets.clear();
    document.querySelectorAll('.active').forEach(btn => btn.classList.remove('active'));
  });
}

function animateDice(dice1Val, dice2Val, callback) {
  const dice1 = document.getElementById('dice1');
  const dice2 = document.getElementById('dice2');

  let rotateX1 = Math.floor(Math.random() * 4 + 1) * 360;
  let rotateY1 = Math.floor(Math.random() * 4 + 1) * 360;
  let rotateX2 = Math.floor(Math.random() * 4 + 1) * 360;
  let rotateY2 = Math.floor(Math.random() * 4 + 1) * 360;

  dice1.style.transform = `rotateX(${rotateX1}deg) rotateY(${rotateY1}deg)`;
  dice2.style.transform = `rotateX(${rotateX2}deg) rotateY(${rotateY2}deg)`;

  setTimeout(() => {
    dice1.style.backgroundPosition = `${(dice1Val - 1) * -100}px 0`;
    dice2.style.backgroundPosition = `${(dice2Val - 1) * -100}px 0`;

    dice1.style.transform = 'rotateX(0deg) rotateY(0deg)';
    dice2.style.transform = 'rotateX(0deg) rotateY(0deg)';

    callback();
  }, 1000);
}

function getPayoutMultiplier(bet) {
  switch (bet) {
    case 'DOWN': return 1;
    case 'UP': return 1;
    case '7': return 4;
    case '2': return 26;
    case '3': return 12;
    case '4': return 8;
    case '5': return 6;
    case '6': return 5;
    case '8': return 5;
    case '9': return 6;
    case '10': return 8;
    case '11': return 12;
    case '12': return 26;
    default: return 1;
  }
}

function applyReferral() {
  const code = document.getElementById('referralInput').value;
  if (code.toLowerCase() === 'alex05') {
    balance += 500;
    document.getElementById('balance').textContent = balance;
    alert('Referral applied! ₹500 added to your balance.');
  } else {
    alert('Invalid referral code.');
  }
}
