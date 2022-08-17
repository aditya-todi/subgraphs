// import { log } from "@graphprotocol/graph-ts";
import { Deposit, EmergencyWithdraw, Withdraw } from "../../../../../generated/MasterChef/MasterChefbiswap";
import { _HelperStore } from "../../../../../generated/schema";
import { BIGINT_NEG_ONE, UsageType } from "../../../../../src/common/constants";
import { handleReward } from "../../common/handlers/handleReward";

// A deposit or stake for the pool specific MasterChef.
export function handleDeposit(event: Deposit): void {
  handleReward(
    event,
    event.params.pid,
    event.params.amount
  );
}

// A withdraw or unstaking for the pool specific MasterChef.
export function handleWithdraw(event: Withdraw): void {
  handleReward(
    event,
    event.params.pid,
    event.params.amount.times(BIGINT_NEG_ONE)
  );
}

// A withdraw or unstaking for the pool specific MasterChef.
export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {
  handleReward(
    event,
    event.params.pid,
    event.params.amount.times(BIGINT_NEG_ONE)
  );
}
