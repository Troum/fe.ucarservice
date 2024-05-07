import { useAppFetch } from "#imports";
import type {UseFetchOptions} from "#app";
import type {FetchResult} from "#app";
import type {SignUpRequest} from "~/interfaces/requests/SignUpRequest";
import type {SignInRequest} from "~/interfaces/requests/SignInRequest";
import type {GroupRequest} from "~/interfaces/requests/GroupRequest";
import type {CustomGroupRequest} from "~/interfaces/requests/CustomGroupRequest";

export function useApiService() {
    async function signUp(userData: SignUpRequest): Promise<FetchResult<any, any>> {
        const url = '/signup';
        const options: UseFetchOptions<any> = {
            method: 'POST',
            body: userData
        };
        return useAppFetch(url, options);
    }
    async function signIn(userData: SignInRequest): Promise<FetchResult<any, any>> {
        const url = '/sign-in';
        const options: UseFetchOptions<any> = {
            method: 'POST',
            body: userData
        };
        return useAppFetch(url, options);
    }
    async function me(): Promise<FetchResult<any, any>> {
        const url = '/auth/me';
        const options: UseFetchOptions<any> = {
            method: 'GET'
        };
        return useAppFetch(url, options);
    }

    async function signOut(): Promise<FetchResult<any, any>> {
        const url = '/auth/sign-out';
        const options: UseFetchOptions<any> = {
            method: 'POST'
        };
        return useAppFetch(url, options);
    }

    async function getAllGroups(): Promise<FetchResult<any, any>> {
        const url = '/auth/groups';
        const options: UseFetchOptions<any> = {
            method: 'GET'
        };
        return useAppFetch(url, options);
    }

    async function getCompanyGroups(companyId: number|undefined): Promise<FetchResult<any, any>> {
        const url = `/auth/companies/${companyId}/groups`;
        const options: UseFetchOptions<any> = {
            method: 'GET'
        };
        return useAppFetch(url, options);
    }

    async function updateCompanyGroups(groupData: GroupRequest, companyId: number|undefined): Promise<FetchResult<any, any>> {
        const url = `/auth/companies/${companyId}`;
        const options: UseFetchOptions<any> = {
            method: 'PATCH',
            body: groupData
        };
        return useAppFetch(url, options);
    }

    async function addCustomGroup(groupData: CustomGroupRequest): Promise<FetchResult<any, any>> {
        const url = `/auth/groups`;
        const options: UseFetchOptions<any> = {
            method: 'POST',
            body: groupData
        };
        return useAppFetch(url, options);
    }

    return {
        signUp,
        signIn,
        signOut,
        me,
        getAllGroups,
        updateCompanyGroups,
        getCompanyGroups,
        addCustomGroup
    };
}
