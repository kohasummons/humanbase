import {
    Types,
    Utils,
    RequestNetwork,
  } from '@requestnetwork/request-client.js';




/**
 * Retrieves a request by its ID from the Request Network.
 *
 * @param {string} requestId - The ID of the request to retrieve.
 *
 * @returns {Promise<Object>} A promise that resolves to the request data object.
 *
 * @example
 * const requestData = await getRequestByID('0x1234...');
 * console.log('Request data:', requestData);
 */

export async function getRequestByID(requestId: string) {
    const requestClient = new RequestNetwork({
      nodeConnectionConfig: {
        baseURL: 'https://sepolia.gateway.request.network',
      },
    });
  
    const request = await requestClient.fromRequestId(requestId);
  
    const requestData = request.getData();
  
    return requestData;
  }
  
  /**
   * Retrieves all requests associated with a given wallet address.
   *
   * @param {string} walletAddress - The Ethereum address of the wallet to query.
   *
   * @returns {Promise<Array<Object>>} A promise that resolves to an array of request data objects.
   *
   * @example
   * const requests = await getRequestsByWalletAddress('0x5678...');
   * console.log('Number of requests:', requests.length);
   * requests.forEach(request => console.log('Request:', request));
   */
  
  export async function getRequestsByWalletAddress(walletAddress: any) {
    const requestClient = new RequestNetwork({
      nodeConnectionConfig: {
        baseURL: 'https://sepolia.gateway.request.network',
      },
    });
  
    const requests = await requestClient.fromIdentity({
      type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
      value: walletAddress,
    });
  
    const requestsData = [];
  
    for (const request of requests) {
      requestsData.push(request.getData());
    }
  
    return requestsData;
  }