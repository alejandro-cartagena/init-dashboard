import { jobPostings } from '../src/Data/jobPostingsData'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    for (let jobPosting of jobPostings) {
        await prisma.jobPosting.create({
            data: jobPosting
        })
    }
}

main().catch(e => {
    console.log(e);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})