export interface IBlock {
  hash: string;
  height: number;
  transactionCount: number;
  bits: string;
  confirmations: number;
  date: Date;
  difficulty: string;
  merkleRoot: string;
  nonce: number;
  size: number;
  version: number;
  isConfirmed: boolean;
}

export interface ICake {
  id: string;
  name: string;
  comment: string;
  imageUrl: string;
  yumFactor: number;
}

export interface IAddress {
  label: string;
  balance: number;
  blockHeightCreated: number;
  date: Date;
  addressType: EAddressType;
  valueIn: number;
  valueOut: number;
  countIn: number;
  countOut: number;
}

export interface ITransaction {
  txId: string;
  transactionType: ETransactionType;
  amountIn: number;
  amountOut: number;
  sources: number;
  recipients: number;
  blockHeight: number;
  date: Date;
  isReward: boolean;
}

export interface IMovement {
  date: Date;
  blockHeight: number;
  address?: IAddress;
  transaction?: ITransaction;
  amountIn: number;
  amountOut: number;
  isReward: boolean;
}

export interface IPeer {
  country: string;
  countryCode: string;
  date: Date;
  ip: string;
  port: number;
  latitude: string;
  longitude: string;
  subVersion: string;
  region: string;
  version: number;
}

export interface IMasternode {
  activeTime: number;
  date: Date;
  lastSeenAt: Date;
  lastPaidAt: Date;
  network: string;
  rank: number;
  status: string;
  txHash: string;
  outidx: number;
  version: number;
  address?: IAddress;
  masternodeAddress?: IAddress;
}

export interface IBlockRewardDetails {
  blockHeight: number;
  date: Date;
  transaction?: ITransaction;
  hasProofOfStakeReward: boolean;
  hasMasternodeReward: boolean;
  hasPoofOfWorkReward: boolean;
  stake?: {
    address?: IAddress;
    reward: number;
  };
  masternode?: {
    address?: IAddress;
    reward: number;
  };
  proofOfWork?: {
    address?: IAddress;
    reward: number;
  };
}

export enum EAddressType {
  Address,
  Zerocoin,
  Burn,
  Fee,
  ProofOfWork,
  ProofOfStake,
  Masternode,
  Governance,
}

export enum ETransactionType {
  Transfer,
  ProofOfWork,
  ProofOfStake,
  Zerocoin,
}

