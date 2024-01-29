import formatWalletAddress from "@common/utils/formatWalletAddress";
import { Execution } from "types";

export const TransactionSelector = ({
  setParams,
  transactions,
  currentParams,
  multiSelect,
}: {
  setParams: (p: any) => void;
  transactions: Array<Execution>;
  currentParams: Array<Execution>;
  multiSelect: boolean;
}) => {
  return (
    <div className="flex flex-row gap-3">
      {transactions.map((tx, key) => {
        return (
          <div
            className={`
              card border-2 border-primary-focus mb-3 cursor-pointer w-content
              ${
                currentParams.find((t) => t === tx)
                  ? "bg-accent"
                  : "bg-base-200 hover:bg-base-300"
              }
            `}
            key={key}
            onClick={() => {
              const isSelected = currentParams.find((t) => t === tx);
              if (multiSelect) {
                if (isSelected) {
                  // remove from params
                  return setParams((curr: any) => {
                    return curr.filter((t: Execution) => t !== tx);
                  });
                } else {
                  // if 3 already selected, and now selecting the 4th one
                  if (currentParams.length === 3) {
                    return setParams([tx]);
                  }
                  // add to params
                  return setParams((curr: any) => {
                    return [...curr, tx];
                  });
                }
              } else {
                return setParams([tx]);
              }
            }}
          >
            <div className="card-body text-sm">
              <p>{tx.txType}</p>
              <p>From: {formatWalletAddress(tx.apiParams.params[0].from)}</p>
              <p>To: {formatWalletAddress(tx.apiParams.params[0].to)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
