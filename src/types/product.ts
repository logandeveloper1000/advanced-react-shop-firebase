// src/types/product.ts
import type { Product as BaseProduct } from "../api/fakestore";
import type { Timestamp, FieldValue } from "firebase/firestore";

/**
 * FirestoreProduct extends your UI Product with Firestore metadata.
 * - On write: createdAt/updatedAt = FieldValue (serverTimestamp()).
 * - On read:  createdAt/updatedAt = Timestamp.
 */
export type FirestoreProduct = BaseProduct & {
  createdAt?: Timestamp | FieldValue;
  updatedAt?: Timestamp | FieldValue;
};
