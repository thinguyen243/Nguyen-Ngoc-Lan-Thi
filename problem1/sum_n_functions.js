function sum_to_n_a_func(temp) {
  let total = 0;
  for (let i = 1; i <= temp; i++) {
    total += i;
  }
  return total;
}

function sum_to_n_b_func(temp) {
  return (temp * (temp + 1)) / 2;
}

function sum_to_n_c_func(temp) {
  if (temp === 1) {
    return 1;
  }
  return temp + sum_to_n_c_func(temp - 1);
}

var n = 100;

var sum_to_n_a = sum_to_n_a_func(n);
console.log(sum_to_n_a);

var sum_to_n_b = sum_to_n_b_func(n);
console.log(sum_to_n_b);

var sum_to_n_c = sum_to_n_c_func(n);
console.log(sum_to_n_c);
