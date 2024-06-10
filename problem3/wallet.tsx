interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}
  
interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}
  
interface Props extends BoxProps {}
  
const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  const prices = usePrices();
  
  const getPriority = (blockchain: string): number => {
    switch (blockchain) {
      case 'Osmosis':
        return 100;
      case 'Ethereum':
        return 50;
      case 'Arbitrum':
        return 30;
      case 'Zilliqa':
      case 'Neo': // Update for equal priority
        return 20;
      default:
        return -99;
    }
  };
  
  const sortedBalances = useMemo(() => {
    return balances.filter((balance: WalletBalance) => {
      const balancePriority = getPriority(balance.blockchain);
      return balancePriority > -99 && balance.amount > 0; // Updated condition
    }).sort((lhs: WalletBalance, rhs: WalletBalance) => getPriority(rhs.blockchain) - getPriority(lhs.blockchain)); // Updated sorting logic
  }, [balances, prices, getPriority]); // Added getPriority as dependency
  
  const formattedBalances = sortedBalances.map((balance: WalletBalance) => ({
    ...balance,
    formatted: balance.amount.toFixed()
  }));
  
  const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
    const usdValue = prices[balance.currency] * balance.amount;
    return (
      <WalletRow
        className = {classes.row}
        key={index}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    );
  });
  
  return (
    <div {...rest}>
      {rows}
    </div>
  );
};