import React from "react";
import DropBoxes from "../DropBoxes";

export default function DesktopRoadMap() {
  return (
    <div id="roadMap" className="min-h-screen pt-16 pb-64 hidden lg:block  border-b border-b-[#FFFFFF20]">
      <DropBoxes />
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold mb-48 text-center lg:text-3xl">
          Our Road Map
        </h2>

        <div className="flex justify-center">
          <div>
            {/* Phase 1 */}
            <div className="relative h-[370px] w-[300px] border-t-[0.7px] border-primary">
              <div className="absolute w-[180px] h-[75px] rounded-md border-[0.7px] border-primary bg-[#150e28] -top-10 -left-[50%] text-2xl flex justify-center items-center">
                PHASE 1
              </div>
              <div className="absolute -right-[2.5%] -top-1.5 w-3 h-3 bg-primary rounded-full"></div>
              {/* map */}
              <div className="absolute -right-[160%] -top-[35%] w-[440px] h-[264px] rounded-md border-[0.7px] border-primary  text-lg flex flex-col justify-evenly p-4 ">
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>$PXL8 Launch</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>Trendings / Listings</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>$4M+ Daily Volume</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>2500+ Holders</div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="relative h-[370px] w-[300px] border-b-[0.7px] border-primary">
              <div className="absolute w-[180px] h-[75px] rounded-md border-[0.7px] border-primary bg-[#150e28] -top-10 -right-[150%] text-2xl flex justify-center items-center">
                PHASE 2
              </div>
              <div className="absolute -right-[2.5%] -top-1.5 w-3 h-3 bg-primary rounded-full"></div>
              {/* map */}
              <div className="absolute -left-44 -top-[35%] w-[440px] h-[264px] rounded-md border-[0.7px] border-primary  text-lg flex flex-col justify-evenly p-4 ">
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>$PXL8 Launch</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>Trendings / Listings</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>$4M+ Daily Volume</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>2500+ Holders</div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 */}
          <div>
            <div className="h-[370px] w-[300px] border-l-[0.7px] border-b-[0.7px] border-primary"></div>

            <div className="relative h-[370px] w-[300px] border-l-[0.7px] border-primary">
              <div className="absolute w-[180px] h-[75px] rounded-md border-[0.7px] border-primary bg-[#150e28] -bottom-10 -left-[150%] text-2xl flex justify-center items-center">
                PHASE 3
              </div>
              <div className="absolute -left-[2.5%] -bottom-1.5 w-3 h-3 bg-primary rounded-full"></div>
              {/* map */}
              <div className="absolute -right-[60%] -bottom-[35%] w-[440px] h-[264px] rounded-md border-[0.7px] border-primary  text-lg flex flex-col justify-evenly p-4 ">
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>$PXL8 Launch</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>Trendings / Listings</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>$4M+ Daily Volume</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className=" w-2 h-2 bg-primary rounded-full"></div>
                  <div>2500+ Holders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
